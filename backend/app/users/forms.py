from django import forms
import re

class UserForm(forms.Form):
    username = forms.CharField(label='Username', max_length=50, 
                            widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    email = forms.EmailField(label='Email', max_length=100,
                             widget=forms.EmailInput(attrs={'placeholder': 'Email'}))
    password = forms.CharField(label='Password', max_length=50,
                                 widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))
    password2 = forms.CharField(label='Confirm Password', max_length=50,
                                 widget=forms.PasswordInput(attrs={'placeholder': 'Confirm Password'}))


    def __init__(self, *args, **kwargs):
        super(UserForm, self).__init__(*args, **kwargs)
        self.username = self.data.get('username')
        self.email = self.data.get('email')
        self.password = self.data.get('password')
        self.password2 = self.data.get('password2')


    def is_valid(self):
        form = super(UserForm, self).is_valid()

        if self.password != self.password2:
            self.add_error('password', 'Пароль не совпадает')
            self.add_error('password2', 'Пароль не совпадает')
            return False
        
        self.username_pattern = r'^[a-zA-Z0-9_]{4,}$'
        if not re.match(self.username_pattern, self.username):
            self.add_error('username', 'Имя пользователя должно содержать только буквы, цифры и _')
            return False

        return form