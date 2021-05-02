from rest_framework.generics import RetrieveAPIView, CreateAPIView
from .serializers import UserInfoSerializer, OwnerDetailsSerializer
from .models import OwnerDetails


class UserInfoView(RetrieveAPIView):
    serializer_class = UserInfoSerializer

    def get_object(self):
        return self.request.user


class OwnerRegisterView(CreateAPIView):
    serializer_class = OwnerDetailsSerializer
    queryset = OwnerDetails.objects.all()
