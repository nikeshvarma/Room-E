from rest_framework.generics import RetrieveAPIView

from .serializers import UserInfoSerializer


class UserInfoView(RetrieveAPIView):
    serializer_class = UserInfoSerializer

    def get_object(self):
        return self.request.user
