from django.urls import path
from .views import *

urlpatterns = [
    path('create/', create_user, name='create_user'),
    path('login/', login_user, name='login_user'),
    path('logout/', logout_user, name='logout_user'),
    path('profile/', profile_page, name='profile_page'),
    path('update-profile/', update_profile_page, name='update_profile_page'),
    
    path('auth-profile-page/<int:author_id>', profile_page, name='post_auth_profile_page'),
]
