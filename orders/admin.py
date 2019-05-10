from django.contrib import admin

from . models import Regular, Sicilian, Toppings, Subs, Salads, Dinner_platters, Pasta

# Register your models here.
admin.site.register(Regular)
admin.site.register(Sicilian)
admin.site.register(Toppings)
admin.site.register(Subs)
admin.site.register(Salads)
admin.site.register(Dinner_platters)
admin.site.register(Pasta)