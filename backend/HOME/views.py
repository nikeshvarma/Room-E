from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import House
from rest_framework.generics import ListAPIView
from .serializer import HomeSerializer


@api_view(['GET'])
def test_api(request):
    return Response(data={'message': 'Welcome to Room-E API'})


class HomeDetail(ListAPIView):
    serializer_class = HomeSerializer

    def get_queryset(self):
        return House.objects.all()
