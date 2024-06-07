from django.shortcuts import render, redirect
from .models import Posts
from .forms import PostsForm
from django.contrib.auth.models import User

# import messages and use it for all views to inform the user about the success of the operation
# RU: импортируем messages и используем его для всех представлений, чтобы информировать пользователя о успешности операции
from django.contrib import messages

# CRM - it means Create, Read, Update, Delete
# Client Relational Mapping

# By convention, the order of the functions is:
# 1. C  -  Create
# 2. R  -  Read
# 3. M  -  Modify (Update)  / Delete


def posts_list(request):
    posts = Posts.objects.all()
    return render(request, 'posts_list.html', context={'posts': posts})


def create_post(request):
    if request.method == 'POST':
        form = PostsForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()

        messages.success(request, 'Post created successfully!')
        return redirect('posts-list')

    else:  # get method
        form = PostsForm()

    return render(request, 'create_post.html', context={'form': form})


# pk  =>  primary key
def update_post(request, pk):
    post = Posts.objects.get(id=pk)
    form = PostsForm(instance=post)

    if request.method == 'POST':
        form = PostsForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            messages.warning(request, 'Post updated successfully!')
            return redirect('posts-list')

    return render(request, 'update_post.html', context={'form': form})


def view_post(request, pk):
    post = Posts.objects.get(id=pk)
    return render(request, 'view_post.html', context={'post': post})


def delete_post(request, pk):
    post = Posts.objects.get(id=pk)
    post.delete()
    messages.success(request, 'Post deleted successfully!')
    return redirect('posts-list')
