from django.shortcuts import render
from django.views.generic import TemplateView

from django.utils.translation import activate, gettext_lazy as _, get_language


# def home(request):
#     return render(request, 'home.html')

class HomeView(TemplateView):
    template_name = 'home.html'

    

def about(request):
    current_language = get_language()
    activate('ru')
    # This is how we can translate text
    text = _("Hello World")
    # You could also use try and except to translate text
    # and if something goes wrong, you can use the default language
    
    context = { 'text': text }
    return render(request, 'about.html', context)

