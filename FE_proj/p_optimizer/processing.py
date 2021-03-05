import pandas as pd
#from sqlalchemy import create_engine
import numpy as np
import p_optimizer.get_raw_data
import p_optimizer.get_preprocessing_data
import p_optimizer.analysis_method
#import pymysql
import statsmodels.regression.linear_model as sm
from .models import klips_data2,kospi_return

class processing():

    def __init__(self):
        self.data_num = data_num = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"]
        self.data_df = pd.DataFrame(list(klips_data2.objects.all().values()))
        

    def fixed_effect_coffecient(self, group_num, age_num):
        # group_num: 1=high_school, 2=college, 3=university
        # age_num : 22=high_school, 24=college, 26=university
        temp_edu = self.data_df.groupby(["i0110"]).get_group(group_num)
        temp_edu = p_optimizer.get_preprocessing_data.get_agecut_data(temp_edu, age_num)

        fer_results = p_optimizer.analysis_method.fe_regression_sol(temp_edu)
        fitting_results = p_optimizer.analysis_method.fitting_polynomial(fer_results, 3)
        return list(fer_results), fitting_results

    def shock_calculation(self,group_num, age_num):
        group_sigma_df = pd.DataFrame()
        group_pvalue_df = pd.DataFrame()
        group_rid_df = pd.DataFrame()
        df_y_star = pd.DataFrame()
        temp_edu = self.data_df.groupby(["i0110"]).get_group(group_num)
        temp_edu = p_optimizer.get_preprocessing_data.get_agecut_data(temp_edu, age_num)

        fer_results = p_optimizer.analysis_method.fe_regression_sol(temp_edu, False)
        fitting_result = p_optimizer.analysis_method.fitting_polynomial(fer_results, 3, False)

        fitting_paramters = pd.concat([fer_results[0][:3], fitting_result[1]], axis=1).sum(axis=1)

        data_dict={}
        for j in self.data_num:
            data_dict[j] = self.data_df[self.data_df['pickle_num']==j]
            temp_edu_split = data_dict[j].groupby(["i0110"]).get_group(group_num)
            del temp_edu_split['pickle_num']
            temp_edu_split.set_index('hhid', inplace=True)
            temp_edu_split = p_optimizer.get_preprocessing_data.get_agecut_data(temp_edu_split, age_num)

            log_y = np.log(temp_edu_split["labor_income"])

            x_mat = p_optimizer.analysis_method.get_reg_x(temp_edu_split).iloc[:, :3]
            poly_x_mat = p_optimizer.analysis_method.polynomial_matrix(temp_edu_split["i0107"], 3).iloc[:, 1:]
            poly_x_mat.index = x_mat.index

            temp_real_data = pd.concat([x_mat, poly_x_mat], axis=1)

            f_hat = temp_real_data @ fitting_paramters

            log_y_star = log_y - f_hat
            df_y_star = pd.concat([df_y_star, log_y_star], axis=1)

        df_y_star.columns = self.data_num

        df_y_star.columns = self.data_num
        temp_varrid_list = []
        temp_rid_list = []
        self.group_rid_df = pd.DataFrame()
        for k in range(len(self.data_num) - 1):
            temp_rid = df_y_star.iloc[:, :-(k + 1)].values - df_y_star.iloc[:, k + 1:].values
            temp_rid_list.append(temp_rid)

            temp_varrid_list.append(np.nanvar(temp_rid))

        var_rid_series = pd.Series(temp_varrid_list)
        rid_series = (pd.DataFrame(temp_rid_list[0], columns=self.data_num[1:]) * -1).mean()
        self.group_rid_df = pd.concat([group_rid_df, rid_series], axis=1)
        var_rid_x = np.ones([len(var_rid_series), 2]) * 2
        var_rid_x[:, 0] = var_rid_series.index.values + 1
        var_rid_y = var_rid_series.values
        sol = sm.OLS(var_rid_y, var_rid_x)
        sol_result = sol.fit()
        sigma_df = pd.DataFrame(sol_result.params, index=["permanent_shock", "idiosyncratic_temporary_shock"],
                                columns=["sigma"])
        pvalue_df = pd.DataFrame(np.round(sol_result.pvalues, 3),
                                 index=["permanent_shock(p-value)", "idiosyncratic_temporary_shock(p-value)"],
                                 columns=["p-value"])

        return sigma_df, pvalue_df

    def get_beta_pvalue_coeff(self):
        ksi = self.group_rid_df
        kospi_R = pd.DataFrame(list(kospi_return.objects.all().values()))
        kospi_R.set_index('SymbolName')
        kospi_R.index = self.data_num
        kospi_ret = kospi_R.copy() / 100
        temp_beta = (kospi_ret - 0.02) - np.mean(kospi_ret - 0.02)
        del temp_beta['SymbolName']
        temp_beta_model = sm.OLS(ksi[0], temp_beta.loc[ksi.index])
        temp_beta_results = temp_beta_model.fit()
        pvalue = temp_beta_results.pvalues[0]
        corr_coeff= np.corrcoef(temp_beta.loc[ksi.index, :].kospi, ksi[0])[0, 1]
        return temp_beta_results.params[0], pvalue, corr_coeff


