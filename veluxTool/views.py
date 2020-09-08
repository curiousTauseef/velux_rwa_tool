from django.shortcuts import render

import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie
from django.conf import settings

from django.http import HttpResponse
from django.views.generic import View

from .utils import render_to_pdf #created in step 4
import datetime

from django import template
#register = template.Library()

#@register.simple_tag(name='new_tag')
#def new_tag(request):
#    print("\nCame here via a HTML tag")

#@register.simple_tag
#def get_message_print_tag(value):
#    '''return a string for a message tag depending on the
#        message tag that can be displayed bold on the flash message''' 
#    print("value",value)
#    return HttpResponse(value)


@csrf_exempt
def index(request):
    print("\nBASE_DIR",settings.BASE_DIR)
    print("\nSTATIC_DIR",settings.STATIC_DIR)
    print("\nSTATIC_ROOT",settings.STATIC_ROOT)
    print("\nSTATIC_URL",settings.STATIC_URL)
    print("\n On webtool launch, firstly we expect to reach here via GET")
    return render(request,"index.html")

@ensure_csrf_cookie
def ventCalcSave(request):
    # request should be ajax and method should be POST.
    if request.is_ajax and request.method == "POST":
        print("\n Reached via POST request on ventCalcSave. Save the user inputs...")
        jsonGET = json.dumps(request.POST)
        userinputfile = open('userinput.txt', 'a')
        userinputfile.write("\n")
        userinputfile.write(jsonGET)
        userinputfile.close()

    return render(request,"index.html")


        

