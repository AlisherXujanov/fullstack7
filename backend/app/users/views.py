from django.shortcuts import render, redirect
from .forms import UserForm
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
def create_user(request):
    form = UserForm()

    if request.method == 'POST':
        form = UserForm(request.POST, request.FILES)
        if form.is_valid():
            username = form.cleaned_data['username']
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            email = form.cleaned_data['email']

            age = form.cleaned_data['age']
            gender = form.cleaned_data['gender']
            image = form.cleaned_data['image']

            user = User.objects.create_user(
                username=username,
                first_name=first_name,
                last_name=last_name,
                email=email,
            )
            user.save()

            profile = Profile.objects.create(
                user=user,
                age=age,
                gender=gender,
                image=image,
                bio='',
            )
            profile.save()

            messages.success(request, f'Welcome {first_name} to our platform!')
            return redirect('home')

    return render(request, 'create_user.html', {'form': form})
