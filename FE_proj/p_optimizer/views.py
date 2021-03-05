from django.shortcuts import render, get_object_or_404
from django.urls import reverse 
from django.http import HttpResponse, HttpResponseRedirect
import numpy as np
from datetime import datetime
import pandas as pd
from p_optimizer.return_gragh import return_graph
from p_optimizer.efficient_frontier import efficient_frontier
import p_optimizer.analysis_method
from p_optimizer.lc_calibration import Maximize_Calibration
from p_optimizer.lc_weights_Return import *
import p_optimizer.get_preprocessing_data
from p_optimizer.processing import processing
from django.http import JsonResponse
import json
from .models import klips_data2
import statsmodels.api as sm
from sqlalchemy import create_engine
# Create your views here.
def home(request):
    return render(request, 'p_optimizer/home.html',{})
def ret_graph(request):
    context={
    }
    return render(request, 'p_optimizer/ret_graph.html',context)
def TDF_graph(request):
    return render(request, 'p_optimizer/TDF_graph.html', {})

def TDF_Result(request):
    if request.POST.get('action') == 'post':
        asset_data = {"risky": [0.12, 0.35], "rf":[0.04, 0.03]}
        education = int(request.POST.get('education'))
        if education ==1:
            edu_age=22
        elif education ==2:
            edu_age=24
        else:
            edu_age=26
        user_age = int(request.POST.get('user_age'))
        retirement = request.POST.get('retirement')
        initial_wealth= request.POST.get('initial_wealth')
        PreProcess = processing()
        fer_result,fitting_results = PreProcess.fixed_effect_coffecient(education, edu_age)
        fer_result = dict(fer_result[0])
        intercept = fer_result['intercept']
        labor_intercept = fitting_results[1][0]
        marriage_beta = fer_result['marriage']
        family_num_beta = fer_result['family_num']
        fixed_effect_coeff = [intercept+labor_intercept+marriage_beta+family_num_beta*2]
        age_coff_list = [fitting_results[1][x] for x in range(1,4)]

        sigma_df, pvalue_df = PreProcess.shock_calculation(education,edu_age)
        beta,pvalue, corr_coeff = PreProcess.get_beta_pvalue_coeff()
        rho = corr_coeff
        permanent_risk = sigma_df['sigma'][0]
        idiosyncratic_risk = sigma_df['sigma'][1]
        aggregate_risk = np.sqrt(permanent_risk+idiosyncratic_risk)
        initial_income = np.exp(fixed_effect_coeff[0]+(user_age*age_coff_list[0])+((user_age**2)/10*age_coff_list[1])+((user_age**3)/100*age_coff_list[2]))
        
        
        sample_size = 20000
        gamma=3
        group_characterize_data = {"rho":rho, "aggregate_risk":aggregate_risk, 
                           "fixed_effect_coeff":fixed_effect_coeff, "age_coeff_list":age_coff_list, 
                           "initial_wealth":initial_wealth, 
                           "initial_income":initial_income}
        risky_asset,risk_free, labor_income, financial_wealth = lc_asset_allocation(asset_data, group_characterize_data, sample_size, gamma)
        context = {
            'risky_asset' : risky_asset,
            'fixed_effect_coeff' : fixed_effect_coeff,
            'risk_free' : risk_free,
            #'lc_data' : lc_data,
            'financial_wealth' : financial_wealth,
            'labor_income' : labor_income,
        }
        return JsonResponse(context)
    else:
        return render(request, 'p_optimizer/TDF_graph.html', {}) 
    
'''if education==1:
            edu_age = 22
            intercept = 7.5072
            labor_intercept = -0.747
            rho = 0.633465
            aggregate_risk = np.sqrt(0.174855+0.005461)
            fixed_effect_coeff = [7.5072-0.7417+0.3198+0.059*2]
            age_coeff_list=[0.0124, 0.0064, -0.0009]
            initial_income = np.exp(fixed_effect_coeff[0]+(user_age* age_coeff_list[0])+((user_age**2)/10*age_coeff_list[1])+((user_age**3)/100*age_coeff_list[2]))
        elif education==2:
            edu_age = 24
            intercept = 7.8016
            labor_intercept = -2.3326
            rho = 0.334903
            aggregate_risk = np.sqrt(0.145682+0.010166)
            fixed_effect_coeff = [7.8016-2.3326+0.2550+0.0537*2]
            age_coeff_list=[0.1232, -0.0193, 0.0011]
            initial_income = np.exp(fixed_effect_coeff[0]+(user_age* age_coeff_list[0])+((user_age**2)/10*age_coeff_list[1])+((user_age**3)/100*age_coeff_list[2]))
        else:
            edu_age=26
            intercept = 7.8717
            labor_intercept = -2.3055
            rho = -0.010961
            aggregate_risk = np.sqrt(0.141262+0.005379)
            fixed_effect_coeff = [7.8717-2.3055+0.3841+0.0440*2]
            age_coeff_list=[0.1055, -0.0111, 0.0001]
            initial_income = np.exp(fixed_effect_coeff[0]+(user_age* age_coeff_list[0])+((user_age**2)/10*age_coeff_list[1])+((user_age**3)/100*age_coeff_list[2]))

        '''
def analysis_results(request):
    if request.POST.get('action') == 'post':
        asset_count = int(request.POST.get('row_count'))
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')
        asset_dict= json.loads(request.POST['asset_dict'])
        time_period = request.POST.get('time_period')

        ret_gr = return_graph()
        y_return = []
        weighted_y_return = []
        indices = []
        index_nidx=[]
        for i in range(1, asset_count+1):
            xy_graph = ret_gr.index_close(time_period,start_date,end_date,asset_dict['asset{}'.format(i)][0], asset_dict['asset{}'.format(i)][1], asset_dict['asset{}'.format(i)][2], asset_dict['asset{}'.format(i)][3])
            y_return = y_return + xy_graph['y_return']
            indices.append(asset_dict['asset{}'.format(i)][0])
            index_nidx.append(xy_graph['index_nidx'])
        if(asset_count>=2):
            for j in range(0,len(xy_graph['y_return'])):
                y=0
                for i in range(0,asset_count):
                    y= y+y_return[j+(len(xy_graph['y_return'])*i)]
                weighted_y_return.append(y)
        elif(asset_count==1):
            weighted_y_return = y_return

        ####ef####
        ef = efficient_frontier()
        table = ef.indices_close(start_date,end_date,indices)
        num_assets = len(indices)
        returns = table.pct_change()
        mu = returns.mean()*252
        stds = np.std(returns)*np.sqrt(252)
        cov_mat = returns.cov()*252
        risk_free_rate = 0.0167
        gmv_pfo = ef.get_gmv_pfo(num_assets, mu, cov_mat)
        msharp_pfo = ef.get_maxsharp_pfo(num_assets,mu,cov_mat,risk_free_rate)
        ef_pfo = ef.efficient_frontier(num_assets,mu,cov_mat)

        context = {
            'xy_graph_x':xy_graph['x_date'],
            'xy_graph_y' : weighted_y_return,
            'gmv_pfo' : gmv_pfo,
            'msharp_pfo' : msharp_pfo,
            'ef_pfo' : ef_pfo,
            'individual_pfo' : {'rets' : np.around((100*mu),3).tolist(), 'stds' : np.around((100*stds),3).tolist()},
            'index_names' : table.columns.tolist(),
            'index_nidx' : index_nidx,
        }
        return JsonResponse(context) 
    context={
        'xy_graph_x':xy_graph['x_date'],
        'xy_graph_y' : weighted_y_return,
        'gmv_pfo' : gmv_pfo,
        'msharp_pfo' : msharp_pfo,
        'ef_pfo' : ef_pfo,
        'individual_pfo' : {'rets' : np.around((100*mu),3).tolist(), 'stds' : np.around((100*stds),3).tolist()},
        'index_names' : table.columns.tolist()
    }

    return render(request, 'p_optimizer/analysis_results.html', context) 

def prac(request):

    '''data_df = pd.DataFrame(list(klips_data2.objects.all().values()))
    temp_edu = data_df.groupby(["i0110"]).get_group(1)
    temp_edu = p_optimizer.get_preprocessing_data.get_agecut_data(temp_edu, 22)
    x_mat = p_optimizer.analysis_method.get_reg_x(temp_edu).iloc[:, :3]
    data = temp_edu

    temp_result = p_optimizer.analysis_method.fe_regression_sol(data, False)

    fer_results = p_optimizer.analysis_method.fe_regression_sol(temp_edu, False)

    poly_x_mat = p_optimizer.analysis_method.polynomial_matrix(temp_edu["i0107"], 3) .iloc[:, 1:]
    poly_x_mat.index = x_mat.index
    fitting_result = p_optimizer.analysis_method.fitting_polynomial(fer_results, 3, False,False)
    
    edu_age=22
    education=1
    user_age=25
    PreProcess = processing()
    fer_result,fitting_results = PreProcess.fixed_effect_coffecient(education, edu_age)
    fer_result = dict(fer_result[0])
    intercept = fer_result['intercept']
    labor_intercept = fitting_results[1][0]
    marriage_beta = fer_result['marriage']
    family_num_beta = fer_result['family_num']
    fixed_effect_coeff = [intercept+labor_intercept+marriage_beta+family_num_beta*2]
    age_coff_list = [fitting_results[1][x] for x in range(1,4)]

    sigma_df, pvalue_df = PreProcess.shock_calculation(education,edu_age)
    beta,pvalue, corr_coeff = PreProcess.get_beta_pvalue_coeff()
    rho = corr_coeff
    permanent_risk = sigma_df['sigma'][0]
    idiosyncratic_risk = sigma_df['sigma'][1]
    aggregate_risk = np.sqrt(permanent_risk+idiosyncratic_risk)
    initial_income = np.exp(fixed_effect_coeff[0]+(user_age*age_coff_list[0])+((user_age**2)/10*age_coff_list[1])+((user_age**3)/100*age_coff_list[2]))
    context={
        'rho':rho,
        'fixed':fixed_effect_coeff,
        'age':age_coff_list,
        'agg':aggregate_risk,
        'initial_income':initial_income,
        'temp_result': temp_result,
        'fit' : fitting_result
        #'xmat':x_matrix.head(100).to_html(),
        #'df2':temp_result2.params,
        #'df3':temp_result3.params,
    }
    
    #fer_results[0][:3]'''
    return render(request, 'p_optimizer/prac.html', {}) 

def Cluster_Analysis(request):
    return render(request, 'p_optimizer/Cluster_Analysis.html', {}) 