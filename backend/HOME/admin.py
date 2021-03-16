from django.contrib import admin
from .models import Flat


@admin.register(Flat)
class Flat(admin.ModelAdmin):
    pass
