from rest_framework.generics import ListAPIView
from .models import Flat
from .serializer import HomeSerializer


class HomeDetail(ListAPIView):
    serializer_class = HomeSerializer

    def get_queryset(self):
        return Flat.objects.all()
