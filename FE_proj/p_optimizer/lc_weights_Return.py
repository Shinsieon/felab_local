import numpy as np
from p_optimizer.lc_calibration import Maximize_Calibration
import  pandas as pd

def lc_asset_allocation(asset_dict, group_characterize_dict, sample_size, gamma):
    np.random.seed(2)
    lc_weights = []
    lc_labor_income = []
    lc_wealth = []
    model = Maximize_Calibration(n=sample_size, rho=group_characterize_dict["rho"], gamma=gamma,
                                aggregate_risk=group_characterize_dict["aggregate_risk"])
    for i in range(35)[::-1]:

        if i is range(35)[::-1][0]:
            financial_wealth = group_characterize_dict["initial_wealth"]
            income = group_characterize_dict["initial_income"]
            model.change_parameters(i, financial_wealth, income)
        else:
            financial_wealth = (float(model.initial_wealth) + np.mean(model.labor_income[:, 0] * 0.3)) * np.mean(
                model.R_t @model.fit())
            income = np.mean(model.labor_income[:, 0])
            model.change_parameters(i, financial_wealth, income)

        model.MC_data()
        model.get_calibration_H(fixed_effect_coeff=group_characterize_dict["fixed_effect_coeff"],
                                age_coeff_list=group_characterize_dict["age_coeff_list"])
        model.get_asset_ret(market_mu=asset_dict["risky"][0], market_sigma=asset_dict["risky"][1],
                            rf_mu=asset_dict["rf"][0], rf_sigma=asset_dict["rf"][1])
        opt_weights = model.fit()

        lc_weights.append(opt_weights)
        lc_labor_income.append(np.round(income))
        lc_wealth.append(financial_wealth)

    
    #lc_total_df = pd.DataFrame(np.array([lc_labor_income, lc_wealth]).T, index=range(35)[::-1],
                             #  columns=["labor_income", "financial_wealth"])
    risky_asset = []
    risk_free= []
    for x in range(len(lc_weights)):
        risky_asset.append(100*lc_weights[x][0])
        risk_free.append(100*lc_weights[x][1])
    return risky_asset, risk_free, lc_labor_income,lc_wealth

