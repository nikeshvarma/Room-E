from django.conf import settings
from rest_framework import serializers
from AUTH.serializer import SignupSerializer
from .models import Flat, FlatImages, FlatAmenities


class FlatImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlatImages
        fields = ['image']


class FlatAmenitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlatAmenities
        exclude = ['id', 'flat']


class AllFlatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flat
        fields = '__all__'

    def to_representation(self, instance):
        image = FlatImages.objects.filter(flat_id=instance)[0]
        response = super().to_representation(instance)
        response['image'] = settings.DOMAIN_NAME + str(image.image.url)
        response['name'] = SignupSerializer(instance.owner).data['first_name'] + ' ' + SignupSerializer(instance.owner).data['last_name']
        response['contact_number'] = SignupSerializer(instance.owner).data['phone_number']
        return response


class FlatDetailSerializer(serializers.ModelSerializer):
    images = FlatImageSerializer(many=True, read_only=True)
    amenities = FlatAmenitiesSerializer(read_only=True)

    class Meta:
        model = Flat
        fields = '__all__'
