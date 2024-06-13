from django.shortcuts import render
from django.views.generic import TemplateView

# def home(request):
#     return render(request, 'home.html')

class HomeView(TemplateView):
    template_name = 'home.html'

    

def about(request):
    return render(request, 'about.html')

