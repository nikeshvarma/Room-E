from django.contrib import admin
from .models import Flat, FlatImages, FlatAmenities


@admin.register(Flat)
class Flat(admin.ModelAdmin):
    list_display = ['id', 'owner', 'rent', 'city']
    list_display_links = ['owner']


@admin.register(FlatImages)
class FlatImages(admin.ModelAdmin):
    list_display = ['flat', 'image']


@admin.register(FlatAmenities)
class FlatAmenities(admin.ModelAdmin):
    list_display = ['flat', 'celling_fan', 'air_conditioner', 'bed', 'sofa', 'water_purifier', 'geyser', 'parking']
