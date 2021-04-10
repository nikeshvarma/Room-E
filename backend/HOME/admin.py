from django.contrib import admin
from .models import Flat, FlatImages, FlatAmenities


@admin.register(Flat)
class Flat(admin.ModelAdmin):
    list_display = ['id', 'owner', 'rent', 'city']
    list_display_links = ['owner']


@admin.register(FlatImages)
class FlatImages(admin.ModelAdmin):
    pass


@admin.register(FlatAmenities)
class FlatAmenities(admin.ModelAdmin):
    list_display = ['flat']
