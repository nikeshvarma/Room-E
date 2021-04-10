from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response

from .models import Flat
from .serializer import AllFlatSerializer, FlatDetailSerializer


class AllFlatView(ListAPIView):
    serializer_class = AllFlatSerializer

    def get_queryset(self):
        return Flat.objects.all()


class FlatDetailView(RetrieveAPIView):
    serializer_class = FlatDetailSerializer

    queryset = Flat.objects.all()

    def get_object(self):
        flat_id = self.request.query_params.get('flat_id')
        return Flat.objects.get(id=flat_id)

    def handle_exception(self, exc):
        return Response(data={'error': 'invalid flat id'}, status=status.HTTP_404_NOT_FOUND)
