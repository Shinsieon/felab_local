import pandas as pd
from .models import idx1001        


class return_graph:
    def index_close(self,frequency, start_date, end_date, index_code, allocation, min_weight=0, max_weight=0):
        package = "p_optimizer.models"
        imported = getattr(__import__(package,fromlist=[index_code]),index_code)

        obj = imported.objects.filter(date__range=(start_date, end_date)).values_list()
        price_list = [obj[x][2] for x in range(len(obj))]
        date = [(obj[x][1]) for x in range(len(obj))]
        index_price_list = pd.DataFrame(index=pd.DatetimeIndex(date), columns=['price'],data=price_list)

        if(frequency == 'w'):
            index_price_list = index_price_list.resample('w').ffill()
        elif(frequency=='m'):
            index_price_list = index_price_list.resample('m').ffill()
        elif(frequency=='y'):
            index_price_list = index_price_list.resample('y').ffill()
        
        index_price_list['n_idx'] = index_price_list['price']/index_price_list['price'][0]*100
        y_return=[0]
        for i in range(1,len(index_price_list)):
            y_return.append((float(allocation)/100)*((index_price_list['n_idx'][i]-index_price_list['n_idx'][i-1])/index_price_list['n_idx'][i-1]))

        xy_graph = {'x_date' : index_price_list.index.strftime("%Y%m%d").tolist(), 'y_return' : y_return, 'index_nidx':index_price_list['n_idx'].tolist()}
        return xy_graph

    