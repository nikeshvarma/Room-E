from rest_framework.generics import ListAPIView
from .models import Flat
from .serializer import AllFlatSerializer


class AllFlatView(ListAPIView):
    serializer_class = AllFlatSerializer

    def get_queryset(self):
        return Flat.objects.all()
