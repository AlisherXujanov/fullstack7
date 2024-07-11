# from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets, generics
from .serializers import PostSerializer
from .models import Posts
from rest_framework import status
# For using a decorators
from rest_framework.response import Response
from rest_framework.decorators import api_view
# For using class-based views
from rest_framework.views import APIView
from django.forms.models import model_to_dict


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]


@api_view(['GET', 'POST'])
def posts_view(request):
    pool = {}
    for obj in Posts.objects.all():
        pool[obj.id] = model_to_dict(obj)

    return Response({"data": pool, 'message': 'Hello, world!'}, status=status.HTTP_200_OK)


# If we want to use it in the class-based view
class PostView(APIView):
    def get(self, request):
        context = {"request": request}
        all_posts = Posts.objects.all()
        posts = PostSerializer(all_posts, many=True, context=context)
        return Response(posts.data, status=status.HTTP_200_OK)

    def post(self, request):
        context = {"request": request}
        data = PostSerializer(data=request.data, context=context)
        if data.is_valid():
            data.save()
            return Response(data.data, status=status.HTTP_201_CREATED)
