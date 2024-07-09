from rest_framework import serializers
from .models import Posts


class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Posts
        fields = ['url', 'title', 'content', 'date_posted']


