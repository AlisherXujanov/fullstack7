from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('products', productsView, name='products'),
    path('create-post', create_post, name='create-post'),
    path('create-product', create_product, name='create-product'),
]
