from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import AuthUser

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUser
        fields = ['first_name', 'last_name', 'email', 'phone_number', 'password']

    def create(self, validated_data):
        user = User.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            phone_number=validated_data['phone_number']
        )
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user
