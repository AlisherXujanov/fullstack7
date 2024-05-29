from django.shortcuts import render, redirect
from .models import Posts
from .forms import PostsForm


def posts_list(request):
    posts = Posts.objects.all()
    return render(request, 'posts_list.html', context={'posts': posts})


def create_post(request):
    if request.method == 'POST':
        form = PostsForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('posts-list')

    else: # get method
        form = PostsForm()

    return render(request, 'create_post.html', context={'form': form})
