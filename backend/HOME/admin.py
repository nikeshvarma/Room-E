from django.contrib import admin

# Register your models here.
from .models import House


@admin.register(House)
class AdminHouse(admin.ModelAdmin):
    pass
