from django import forms
from .models import *

class PostsForm(forms.ModelForm):

    class Meta:
        model = Posts
        fields = ('title', 'content')

