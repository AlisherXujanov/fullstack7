from django.shortcuts import render
from .models import Posts, Products
from .forms import PostsForm


# posts/
def home(request):
    all_posts = Posts.objects.all()
    context = {
        "title": "Home page",
        "subtitle": "Welcome to the home page",
        "posts": all_posts
    }
    return render(request, 'home.html', context)

# posts/products/
def productsView(request):
    all_products = Products.objects.all()
    context = {
        "title": "Hello world",
        "objects": all_products
    }
    return render(request, 'products.html', context)



def create_post(request):
    if request.method == 'POST':
        form = PostsForm(request.POST)
        if form.is_valid():
            form.save()

    else: # get method
        form = PostsForm()

    return render(request, 'create_post.html', context={'form': form})