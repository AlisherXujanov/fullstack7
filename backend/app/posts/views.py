from django.shortcuts import render


# posts/
def home(request):
    context = {
        "title": "Home page",
        "subtitle": "Welcome to the home page"
    }
    return render(request, 'home.html', context)


