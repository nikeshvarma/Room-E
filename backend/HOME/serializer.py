from rest_framework.serializers import ModelSerializer

from .models import House


class HomeSerializer(ModelSerializer):
    class Meta:
        model = House
        fields = '__all__'
