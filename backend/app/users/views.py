from django.shortcuts import render, redirect
from .forms import UserForm, LoginForm, ProfileForm
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from posts.models import Posts

def create_user(request):
    form = UserForm()

    if request.method == 'POST':
        form = UserForm(request.POST, request.FILES)
        
        if form.is_valid():
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            user = User.objects.create_user(username=username, password=password, email=email)
            user.save()

            profile = Profile.objects.create(user=user)
            profile.save()

            messages.success(request, f'Please, login now!')
            return redirect('login_user')
        else:
            print("FORM IS NOT VALID")
            print(form.errors)

    return render(request, 'create_user.html', {'form': form})

def login_user(request):
    form = LoginForm()

    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            if user := authenticate(request, username=username, password=password):
                # ==>  if user is not None:
                login(request, user)
                messages.success(request, f'Welcome {username}!')
                return redirect('profile_page')
            else:
                messages.error(request, 'Invalid username or password')
                return redirect('login_user')
        else:
            print("FORM IS NOT VALID")
            print(form.errors)
            
    return render(request, 'login_user.html', {'form': form})

def logout_user(request):
    logout(request)
    messages.success(request, 'You have been logged out')
    return redirect('home')


def profile_page(request, author_id: int = None):
    posts = []
    if request.user.is_authenticated:
        user = User.objects.filter(id=request.user.id).first()
        profile = Profile.objects.filter(id=user.profile.id).first()
        posts = Posts.objects.filter(author=profile.user)
        if author_id:
            profile = Profile.objects.filter(user__id=author_id).first()
            posts = Posts.objects.filter(author=profile.user)
    else:
        return redirect('login_user')

    context = {
        'profile': profile,
        'posts': posts
    }
    return render(request, 'profile_page.html', context)


def update_profile_page(request):
    profile = Profile.objects.filter(id=request.user.profile.id).first()
    form = ProfileForm(instance=profile)

    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile updated')
            return redirect('profile_page')
        else:
            print("FORM IS NOT VALID")
            print(form.errors)

    context = {
        'user': request.user,
        'form': form
    }
    return render(request, 'update_profile_page.html', context)

