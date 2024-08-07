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
from django.contrib.auth.models import User
from rest_framework.pagination import PageNumberPagination

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
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request, pk=None):
        context = {"request": request}
        if pk:
            post = Posts.objects.get(id=pk)
            post = PostSerializer(post, context=context)
            return Response(post.data, status=status.HTTP_200_OK)
        else:
            # posts = Posts.objects.all()
            # posts = PostSerializer(posts, many=True, context=context)
            
            # if self.request.query_params.get('date_posted'):
            #     posts = posts.order_by("date_posted")
            # if title__startswith := self.request.query_params.get('title__startswith'):
            #     posts = posts.filter(title__startswith=title__startswith)
            # posts = PostSerializer(posts, many=True, context=context)
            # return Response(posts.data, status=status.HTTP_200_OK)

            posts = Posts.objects.all()
            paginator = PageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(
                result_page, many=True, context=context)
            return paginator.get_paginated_response(serializer.data)

   

    def post(self, request):
        context = {"request": request}
        data = PostSerializer(data=request.data, context=context)
        # book_names = request.data["book_names"]

        # Save author to the post
        if data.is_valid():
            # HERE WE NEED TO MAKE IT DYNAMIC
            # THIS LINE MUST BE DELETED LATER or changed to request.user
            data.validated_data['author'] = User.objects.first()
            data.save()
            
            # for book_name in book_names:
            #     book = Books.objects.create(name=book_name, content=post)
            #     book.save()
            
            return Response(data.data, status=status.HTTP_201_CREATED)
        
    def put(self, request, pk):
        context = {"request": request}
        post = Posts.objects.get(id=pk)
        data = PostSerializer(instance=post, data=request.data, context=context)
        if data.is_valid():
            data.save()
            return Response(data.data, status=status.HTTP_200_OK)
        return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def delete(self, request, pk):
        post = Posts.objects.get(id=pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
