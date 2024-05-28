from sqlite3 import IntegrityError
from django.db import models
import json

class TestManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(title__contains="test")


# Create your models here.
class Announcement(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()
    test_objects = TestManager()

    def __str__(self):
        return self.title

    # def get_data(self, key=None, detault=None):
    #     data = json.loads(self.all_json_data)
    #     if (key):
    #         default = default or f'Key {key} does not exist'
    #         return data.get(key, default)
    #     return data

    # def set_data(self, data):
    #     self.all_json_data = json.dumps(data)
    #     self.save()

    # def update_data(self, new_data):
        old_data = self.get_data()
        old_data.update(new_data)
        self.set_data(old_data)
        self.save()
    
    def save(self, *args, **kwargs):
        # Do something
        if not self.title:
            raise IntegrityError("Title is required")
        self.title = self.title.upper()
        super().save(*args, **kwargs)  # Call the "real" save() method.


    def delete(self, *args, **kwargs):
        # Do something
        # ex: self.children.all().delete()
        # ex: self.user.posts.all().delete()
        super().delete(*args, **kwargs)  # Call the "real" delete() method.