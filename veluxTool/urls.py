from django.urls import path
from veluxTool import views
#import veluxTool
import accounts
from django.views.generic import RedirectView
#from .views import GeneratePdf
from django.urls import include

app_name = "veluxTool"

urlpatterns = [
    path('', views.index, name='index'),
    #path('', include('accounts.urls')),
    path('pdf/', views.GeneratePdf.as_view()),
    #path('tag/', views.get_message_print_tag, name='get_message_print_tag'),
    
]