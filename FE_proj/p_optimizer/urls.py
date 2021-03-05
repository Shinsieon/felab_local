from django.urls import path
from . import views


urlpatterns=[
    path('',views.home, name='home'),
    path('home/',views.home, name='home'),
    path('ret_graph/',views.ret_graph, name='ret_graph'),
    path('analysis_results/', views.analysis_results, name='analysis_results'),
    path('prac/', views.prac, name='prac'),
    path('TDF_graph/', views.TDF_graph, name='TDF_graph'),
    path('TDF_Result/', views.TDF_Result, name='TDF_Result'),
    path('Cluster_Analysis/', views.Cluster_Analysis, name='Cluster_Analysis'),
]