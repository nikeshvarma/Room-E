from rest_framework import serializers
from AUTH.serializer import AuthUserSerializer
from .models import House


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = ['id', 'home_price', 'home_address']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['owner_email'] = AuthUserSerializer(instance.home_owner).data['email']
        return response
