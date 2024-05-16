from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('products', productsView, name='products'),
]
