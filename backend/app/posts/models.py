from django.db import models

# 1. Create a new model-class named ...
# 2. run 
#    - `python manage.py makemigrations`
#    - `python manage.py migrate`
# 3. python manage.py createsuperuser
#    - add a username, email, and password


# Create your models here.
class Posts(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    date = models.DateField(auto_now_add=True)
    author = models.CharField(max_length=50)


    def __str__(self) -> str:
        return self.title


class Products(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(default='...')

    def __str__(self) -> str:
        return self.title