from django.shortcuts import render
from .models import Posts, Products


# posts/
def home(request):
    all_posts = Posts.objects.all()
    context = {
        "title": "Home page",
        "subtitle": "Welcome to the home page",
        "posts": all_posts
    }
    return render(request, 'home.html', context)


def productsView(request):
    all_products = Products.objects.all()
    context = {
        "title": "Hello world",
        "objects": all_products
    }
    return render(request, 'products.html', context)


