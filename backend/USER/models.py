from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class OwnerDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    pincode = models.CharField(max_length=6)

    def __str__(self):
        return str(self.user)

    class Meta:
        verbose_name_plural = 'Owner Details'
