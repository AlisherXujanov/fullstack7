from django.urls import path
from .views import *

urlpatterns = [
    path('create-post', create_post, name='create-post'),
    path('update-post/<int:pk>', update_post, name='update-post'),
    path('view-post/<int:pk>', view_post, name='view-post'),
    path('delete-post/<int:pk>', delete_post, name='delete-post'),
    path('posts-list', posts_list, name='posts-list')
]
