from django.contrib import admin
from .models import AuthUser


@admin.register(AuthUser)
class Accounts(admin.ModelAdmin):
    list_display = ('email', 'is_active', 'is_owner', 'last_login')
