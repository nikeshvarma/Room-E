from django.contrib.auth import get_user_model, authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from .serializer import SignupSerializer

User = get_user_model()


class SignupView(CreateAPIView):
    # http_method_names = ['POST']
    serializer_class = SignupSerializer
    queryset = User.objects.all()


class LoginView(APIView):
    def post(self, request):
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(email=email, password=password)
        if user is not None:
            context = {'token': str(Token.objects.get(user=user))}
        else:
            context = {'message': 'invalid credentials'}
        return Response(data=context, status=status.HTTP_200_OK)
