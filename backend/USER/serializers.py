from rest_framework import serializers
from .models import OwnerDetails
from django.contrib.auth import get_user_model

User = get_user_model()


class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'phone_number', 'is_owner']


class OwnerDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerDetails
        exclude = ['user']

    def save(self, **kwargs):
        user = self.context['request'].user
        user.is_owner = True
        user.save()
        self.validated_data['user'] = user
        super(OwnerDetailsSerializer, self).save(**kwargs)
