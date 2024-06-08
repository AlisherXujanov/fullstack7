from django.db import models
from django.contrib.auth.models import User

# 1. Create a new model-class named ...
# 2. run 
#    - `python manage.py makemigrations`
#    - `python manage.py migrate`
# 3. python manage.py createsuperuser
#    - add a username, email, and password


# Create your models here.
class Posts(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    # image = models.ImageField(upload_to='posts', blank=True, null=True)
    

    def __str__(self) -> str:
        return self.title
    
    def get_owner_pic(self):
        return self.author.profile.image.url

    class Meta:
        verbose_name_plural = 'Posts'
        ordering = ('-date_posted',)
        
