from rest_framework import serializers
from .models import Posts


class PostSerializer(serializers.HyperlinkedModelSerializer):
    ...
    class Meta:
        model = Posts
        fields = ['url', 'title', 'content', 'date_posted']


# class PostSerializer(serializers.Serializer):
#     # NOTE: usually we don't want to add id field
#     # id = serializers.IntegerField(read_only=True)
#     title = serializers.CharField(max_length=255)
#     content = serializers.CharField(max_length=255)
#     date_posted = serializers.DateTimeField(read_only=True)
#     updated_at = serializers.DateTimeField(read_only=True)

#     class Meta:
#         model = Posts
#         fields = ['title', 'content', 'date_posted', 'updated_at']

    # def create(self, validated_data: dict) -> Books:
    #     return Books.objects.create(**validated_data)

    # def update(self, instance: Books, validated_data: dict) -> Books:
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.author = validated_data.get('author', instance.author)
    #     instance.description = validated_data.get(
    #         'description', instance.description)
    #     instance.save()
    #     return instance
