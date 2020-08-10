from django.contrib import admin

# Register your models here.

from .models import koninklijkBesluit, BVVTwee, BVVDrie

admin.site.register(koninklijkBesluit)
admin.site.register(BVVTwee)
admin.site.register(BVVDrie)