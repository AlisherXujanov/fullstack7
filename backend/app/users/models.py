from django.db import models
from django.contrib.auth.models import User
from PIL import Image


CHOICES = (
    ('1', "Male"),
    ('2', 'Female'),
    ('3', 'Other'),
)


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, default='')
    last_name = models.CharField(max_length=100, default='')
    bio = models.TextField(null=True, blank=True)
    image = models.ImageField(default='default.png', upload_to='profile_pics')
    age = models.IntegerField(default=0)
    gender = models.CharField(max_length=100, default='')

    def __str__(self):
        return f'{self.user.username} Profile'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path).convert('RGB')
        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
