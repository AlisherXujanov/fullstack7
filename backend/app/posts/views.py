from django.shortcuts import render, redirect
from .models import Posts
from .forms import PostsForm


def create_post(request):
    if request.method == 'POST':
        form = PostsForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('home')

    else: # get method
        form = PostsForm()

    return render(request, 'create_post.html', context={'form': form})
