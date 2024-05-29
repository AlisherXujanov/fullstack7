from django.urls import path
from .views import *

urlpatterns = [
    path('create-post', create_post, name='create-post'),
    path('posts-list', posts_list, name='posts-list'),
]
