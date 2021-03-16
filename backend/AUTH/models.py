from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import CustomUserManager
from django.utils.translation import ugettext_lazy as _


class AuthUser(AbstractUser):
    username = None
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(_('email address'), unique=True)
    phone_number = models.CharField(max_length=10)
    is_owner = models.BooleanField(default=False)
    is_phone_verified = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    class Meta:
        db_table = 'users'
