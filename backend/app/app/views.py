from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.utils.translation import activate, gettext_lazy as _, get_language
from django.contrib import messages


# def home(request):
#     return render(request, 'home.html')

class HomeView(TemplateView):
    template_name = 'home.html'


def about(request):
    text = _("Hello World")
    context = {'text': text}
    return render(request, 'about.html', context)


def change_lang(request, lang_code: str):
    activate(lang_code)
    current_language = get_language()
    messages.success(request, _('Language changed to ') + current_language)
    current_url = request.META.get('HTTP_REFERER')
    return redirect(current_url)
