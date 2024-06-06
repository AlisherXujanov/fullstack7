from email.policy import default
from django import forms
import re
from .models import Profile

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


class LoginForm(forms.Form):
    username = forms.CharField(label='Username', max_length=50, 
                            widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    password = forms.CharField(label='Password', max_length=50,
                                    widget=forms.PasswordInput(attrs={'placeholder': 'Password', 'type':'password'}))

    def __init__(self, *args, **kwargs):
        super(LoginForm, self).__init__(*args, **kwargs)
        self.username = self.data.get('username')
        self.password = self.data.get('password')

    def is_valid(self):
        form = super(LoginForm, self).is_valid()

        # if not (user := User.objects.filter(username=self.username).first()):
        #     self.add_error('username', 'Пользователь не найден по данному логину')
        #     return False
        
        return form


CHOICES = (
    ('male', "Male"),
    ('female', 'Female'),
    ('other', 'Other'),
)


class ProfileForm(forms.ModelForm):
    first_name = forms.CharField(label='First name', max_length=100, required=False,
                            widget=forms.TextInput(
                                attrs={'class': 'form-control', "placeholder": "First name"}))
    last_name = forms.CharField(label='Last name', max_length=100, required=False,
                            widget=forms.TextInput(
                                attrs={'class': 'form-control', "placeholder": "Last name"}))
    
    image = forms.ImageField(label='Profile picture', required=False,
                            widget=forms.FileInput(
                                attrs={'class': 'form-control', "placeholder": "Profile picture"}))
    gender = forms.ChoiceField(label='Choose your gender', choices=CHOICES,
                               widget=forms.Select(
                                   attrs={'class': 'form-control'}))
    bio = forms.CharField(label='Bio', required=False, help_text='Write something about yourself',
                            widget=forms.Textarea(
                                attrs={'class': 'form-control', 'rows': 4, "placeholder": "Write something about yourself"}))

    class Meta:
        model = Profile
        fields = ["first_name",  "last_name",  "bio",  "image",  "age",  "gender"]
