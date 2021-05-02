from django.contrib import admin
from .models import OwnerDetails


@admin.register(OwnerDetails)
class OwnerDetails(admin.ModelAdmin):
    pass
