from django import forms


CHOICES = (
    ('1', "Male"),
    ('2', 'Female'),
    ('3', 'Other'),
)


class UserForm(forms.Form):
    username = forms.CharField(label='Username', max_length=50, 
                            widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    first_name = forms.CharField(label='First Name', max_length=100,
                                 widget=forms.TextInput(attrs={'placeholder': 'First Name'}))
    last_name = forms.CharField(label='Last Name', max_length=100,
                                widget=forms.TextInput(attrs={'placeholder': 'Last Name'}))
    age = forms.IntegerField(label='Age',
                             widget=forms.NumberInput(attrs={'placeholder': 'Age'}))
    email = forms.EmailField(label='Email', max_length=100,
                             widget=forms.EmailInput(attrs={'placeholder': 'Email'}))
    gender = forms.ChoiceField(choices=CHOICES, label="Gender",
                               widget=forms.Select(attrs={'class': 'form-select'}))
    # image = forms.ImageField(label='Image', widget=forms.FileInput(
    #     attrs={'class': 'form-control'}))

    def is_valid(self) -> bool:
        return super().is_valid()