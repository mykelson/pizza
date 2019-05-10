from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User

# Create your views here.
def login_view(request):
    """ Log in users """

    # Get user information
    username = request.POST["username"]
    password = request.POST["password"]

    # Authenticate user.
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return HttpResponseRedirect(reverse("menu"))
    else:
        return render(request, "users/login.htm", {"message": "Invalid credentials"})


def logout_view(request):
    """ Log users out """

    logout(request)
    return render(request, "users/login.htm", {"message": "Logged out"})


def register(request):
    """ Register users """

    # Get users information.
    first_name = request.POST["first_name"]
    last_name = request.POST["last_name"]
    username = request.POST["username"]
    email = request.POST["email"]
    password = request.POST["password"]

    # Create and save user.
    user = User.objects.create_user(username, email, password)
    user.first_name = first_name
    user.last_name = last_name
    user.save()

    # Log in user
    login(request, user)

    return HttpResponseRedirect(reverse("menu"))