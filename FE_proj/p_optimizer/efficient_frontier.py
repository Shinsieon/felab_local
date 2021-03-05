import pandas as pd
import numpy as np
import scipy.optimize as sco
from .models import idx_name
import cvxpy as cp
import json

class efficient_frontier:  

    def indices_close(self, start_date, end_date, indices_code):
        table = pd.DataFrame()
        indices = indices_code
        num_assets = len(indices)
        index_names = []
        date= []
        price_list=[]
        p_dict={}
        package = "p_optimizer.models"
        for i,j in enumerate(indices):
            imported = getattr(__import__(package,fromlist=[j]),j)
            obj = imported.objects.filter(date__range=(start_date, end_date)).values_list()
            price_list = [obj[x][2] for x in range(len(obj))]
            date = [(obj[x][1]) for x in range(len(obj))]
            p_dict[idx_name.objects.filter(idx=indices[i]).values()[0]['name']] = price_list
            
        table = pd.DataFrame(index=date, data=p_dict)
        
        return table
    
    def get_port_var(self,weights,cov_mat):
        return np.dot(weights.T, np.dot(cov_mat,weights))

    def get_gmv_pfo(self,num_assets,mu,cov_mat):
        x0 = np.ones(num_assets)/num_assets
        constraints = ({'type' : 'eq', 'fun' : lambda x: np.sum(x)-1})
        args=(cov_mat)
        options = {'maxiter':1000, 'ftol':1e-12}
        gmv = sco.minimize(self.get_port_var, x0, method='SLSQP', constraints = constraints, args=args,options = options,bounds=((0,1),)*num_assets)    
        gmv_volatility = np.sqrt(gmv.fun)
        gmv_weights = gmv.x
        self.gmv_return = np.dot(mu.T, gmv_weights)
        return {'gmv_return' : np.around(self.gmv_return*100,3), 'gmv_volatility' : np.around(gmv_volatility*100,3), 'gmv_weights' : np.dot(100,np.around(gmv_weights,2)).tolist()}

    def get_max_sharp(self,weights, num_assets, mu,cov_mat,risk_free_rate):
        pf_ret = np.dot(mu.T,weights)
        pf_vol = np.sqrt(np.dot(np.dot(weights.T,cov_mat),weights))
        return -(pf_ret - risk_free_rate) / pf_vol

    def get_maxsharp_pfo(self,num_assets, mu, cov_mat, risk_free_rate):
        args = (num_assets, mu, cov_mat, risk_free_rate)
        x0 = np.ones(num_assets)/num_assets
        constraints = ({'type' : 'eq', 'fun' : lambda x: np.sum(x)-1})
        options = {'maxiter':1000, 'ftol':1e-12}
        msharp = sco.minimize(self.get_max_sharp, x0, method='SLSQP', constraints = constraints, args=args,options = options,bounds=((0,1),)*num_assets)    
        msharp_value = msharp.fun
        msharp_weights = msharp.x
        msharp_return = np.dot(mu.T, msharp_weights)
        msharp_volatility = np.sqrt(np.dot(np.dot(msharp_weights.T,cov_mat),msharp_weights))
        return {'msharp_value' : np.around(msharp_value,2), 'msharp_weights' : np.dot(100,np.around(msharp_weights,2)).tolist(),'msharp_volatility' : np.around(100*msharp_volatility,3),'msharp_return':np.around(100*msharp_return,3)}

    def efficient_frontier(self,num_assets, mu,cov_mat):
        trets = np.linspace(self.gmv_return*100, max(mu*100), 30)
        tvols=[]
        ef_weights = []
        for tret in trets:
            w= cp.Variable(num_assets)
            objective = cp.Minimize(cp.quad_form(w, cov_mat))
            constraints = [cp.sum(w) == 1,w>=0, w@(mu*100)>=tret]
            problem= cp.Problem(objective, constraints)
            problem.solve(solver=cp.ECOS)
            tvols.append(np.sqrt(np.dot(w.value.T, np.dot(cov_mat, w.value))))
            ef_weights.append(w.value.tolist())
        return {'ef_volatilities' : np.around(np.dot(tvols,100),3).tolist(), 'ef_returns' : np.around(trets,3).tolist(), 'ef_weights': np.dot(np.around(ef_weights,2),100).tolist()}