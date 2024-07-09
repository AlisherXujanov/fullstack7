from rest_framework import serializers
from .models import Posts


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Posts
        fields = ['url', 'title', 'content', 'date_posted']


