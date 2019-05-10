from django.http import HttpResponse
from django.shortcuts import render

from orders.models import Regular, Sicilian, Toppings, Subs, Salads, Pasta, Dinner_platters
from pip._internal.cli import status_codes

# Create your views here.
def index(request):
    return render(request, "orders\index.htm")


def menu(request):
    """ Display our menu """
    
    if not request.user.is_authenticated:
        return render(request, "users/login.htm", {"message":None})

    #Get items and their prices.
    context = {
        "user": request.user,
        "regulars": Regular.objects.all(),
        "sicilians": Sicilian.objects.all(),
        "toppings": Toppings.objects.all(),
        "subs": Subs.objects.all(),
        "salads": Salads.objects.all(),
        "pastas": Pasta.objects.all(),
        "dinner_platters": Dinner_platters.objects.all()
    }
    

    return render(request, "orders\menu.htm", context)
