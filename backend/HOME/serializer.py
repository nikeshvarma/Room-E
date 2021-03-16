from rest_framework import serializers
from AUTH.serializer import SignupSerializer
from .models import Flat


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flat
        fields = '__all__'

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['owner_email'] = SignupSerializer(instance.flat_owner).data['email']
        return response
