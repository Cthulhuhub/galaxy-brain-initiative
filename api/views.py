from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
# Create your views here.


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(requrest.POST)

        if form.is_valid():
            user = form.save()
            login(request, user)

            return redirect('/')
