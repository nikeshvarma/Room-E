from rest_framework import serializers
from AUTH.serializer import SignupSerializer
from .models import Flat


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flat
        fields = '__all__'

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['owner_first_name'] = SignupSerializer(instance.flat_owner).data['first_name']
        response['owner_last_name'] = SignupSerializer(instance.flat_owner).data['last_name']
        return response
