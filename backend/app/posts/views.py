from django.shortcuts import render, redirect
from .models import Posts
from .forms import PostsForm
from django.contrib.auth.models import User
from django.views.generic import ListView, DetailView, CreateView
from .usecases import add_to_wishlist, remove_from_wishlist
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib import messages

@login_required
def add_to_favorites(request, pk):
    """
        This view serves to add 
        a post to the wishlist.
    """
    if add_to_wishlist(request, pk):
        messages.success(request, 'Added to wishlist!')
    else:
        messages.warning(request, 'Already in wishlist!')

    return redirect('posts-list')


@login_required
def remove_from_favorites(request, pk):
    if remove_from_wishlist(request, pk):
        messages.success(request, 'Removed item from wishlist!')
    else:
        messages.warning(request, 'Item was not in the wishlist!')

    return redirect('posts-list')


class PostListView(ListView):
    model = Posts
    template_name = 'posts_list.html'
    context_object_name = 'posts'
    paginate_by = 4

    def __init__(self, *args, **kwargs):
        self.request = None


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        self.request = self.request or kwargs.get('request')
        context['wishlist'] = self.request.session.get('wishlist', [])
        return context


@login_required
@permission_required('posts.can_create_post')
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
@login_required
def update_post(request, pk):
    post = Posts.objects.get(id=pk)

    if request.user != post.author:
        messages.warning(request, 'You are not allowed to update this post!')
        return redirect('posts-list')

    form = PostsForm(instance=post)


    if request.method == 'POST':
        form = PostsForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            messages.warning(request, 'Post updated successfully!')
            return redirect('posts-list')

    return render(request, 'update_post.html', context={'form': form})


# def view_post(request, pk):
#     post = Posts.objects.get(id=pk)
#     return render(request, 'view_post.html', context={'post': post})


class PostDetailView(DetailView):
    model = Posts
    template_name = 'view_post.html'
    context_object_name = 'post'  # default is object

    # def get_queryset(self):
    #     # If you want to change the data that is passed into HTML
    #     return Posts.objects.filter(id=self.kwargs['pk'])


@login_required
def delete_post(request, pk):
    post = Posts.objects.get(id=pk)
    post.delete()
    messages.success(request, 'Post deleted successfully!')
    return redirect('posts-list')
