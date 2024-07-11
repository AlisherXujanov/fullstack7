from django.urls import path
from .views import *
from .api_views import posts_view

urlpatterns = [
    path('create-post', create_post, name='create-post'),
    path('update-post/<int:pk>', update_post, name='update-post'),
    path('view-post/<int:pk>', PostDetailView.as_view(), name='view-post'),
    path('delete-post/<int:pk>', delete_post, name='delete-post'),
    path('posts-list', PostListView.as_view(), name='posts-list'),
    path('add-to-favorites/<int:pk>', add_to_favorites, name='add-to-favorites'),
    path('remove-from-favorites/<int:pk>', remove_from_favorites, name='remove-from-favorites'),

    path('api-posts', posts_view, name='posts')
]
