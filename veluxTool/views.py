from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.conf import settings
from django.http import HttpResponse

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
        print("\n Reached via POST request on HTML form ID ventCalcSave. Save the user inputs...")
        jsonGET = json.dumps(request.POST)
        userinputfile = open('userinput.txt', 'a')
        userinputfile.write("\n")
        userinputfile.write(jsonGET)
        userinputfile.close()

    return render(request,"index.html")


        

