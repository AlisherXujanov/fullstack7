"""
URL configuration for app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import *
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from posts.api_views import PostViewSet

from rest_framework import routers
router = routers.DefaultRouter()

router.register(r'posts', PostViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('change-lang/<str:lang_code>/', change_lang, name='change_lang'),
    # This needs to be changed

    # API views
    path('apis/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] 

urlpatterns += i18n_patterns(
    path('', HomeView.as_view(), name='home'),
    path('about/', about, name='about'),
    path('posts/', include('posts.urls')),
    path('users/', include('users.urls')),
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
