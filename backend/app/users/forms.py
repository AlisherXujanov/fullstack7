from django import forms

class UserForm(forms.Form):
    username = forms.CharField(label='Username', max_length=50, 
                            widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    email = forms.EmailField(label='Email', max_length=100,
                             widget=forms.EmailInput(attrs={'placeholder': 'Email'}))
    password = forms.CharField(label='Password', max_length=50,
                                 widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))
    password2 = forms.CharField(label='Confirm Password', max_length=50,
                                 widget=forms.PasswordInput(attrs={'placeholder': 'Confirm Password'}))
