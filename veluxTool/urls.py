from django.urls import path, re_path
from veluxTool import views
#import veluxTool
import accounts
from django.views.generic import RedirectView
#from .views import GeneratePdf
from django.urls import include

app_name = "veluxTool"

urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^fesg_ajax_request/', views.ventCalcSave, name='fesg_ajax_request'),  
]