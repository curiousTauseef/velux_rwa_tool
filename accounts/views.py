from django.shortcuts import render

from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.contrib.auth.models import User

from django.contrib import messages
from django.http import HttpResponse
from django.urls import reverse

from django.apps import apps

    
def login_user(request):
    if request.method == 'POST':
        print("\n Reached here via login interface")
        print("\n Try to get name of admin app --> ", apps.get_app_config('admin').verbose_name)
        print("\n Try to get name of app handling login --> ", apps.get_app_config('accounts').verbose_name)
        print("\n Try to get name of app handling tool for user input for smoke compartment --> ", apps.get_app_config('veluxTool').verbose_name)
        #print("\n Create user velux")
        #user = User.objects.create_user('velux', 'velux@gmail.com', 'velux')
        #user.save()
        
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        

        if user is not None:
            login(request, user)
            redirect_url = request.GET.get('next', 'home')
            #return redirect(redirect_url)
            return redirect('/home/')
        else:
            messages.error(request, "Username Or Password is incorrect!!",
                           extra_tags='alert alert-warning alert-dismissible fade show')
            #return redirect('veluxTool')
            #reverse('veluxTool:index', current_app=request.resolver_match.namespace)
            #return redirect('/home/')

    return render(request, 'accounts/login.html')

def logout_user(request):
    logout(request)
    return render(request, 'accounts/relogin.html')

