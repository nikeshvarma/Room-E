from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Flat
from .serializer import AllFlatSerializer, FlatDetailSerializer

User = get_user_model()


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


class FlatContactDetailsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        falt_id = request.query_params.get('flat_id')
        flat = Flat.objects.get(id=falt_id)
        user = flat.owner
        data = {
            'name': user.first_name + ' ' + user.last_name,
            'email': user.email,
            'phone_number': user.phone_number
        }
        return Response(data=data, status=status.HTTP_200_OK)
