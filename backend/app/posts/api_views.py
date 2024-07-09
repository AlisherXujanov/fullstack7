# from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets

from .serializers import PostSerializer
from .models import Posts


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]

