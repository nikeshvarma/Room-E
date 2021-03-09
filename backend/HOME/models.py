from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class House(models.Model):
    home_owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owner')
    home_price = models.FloatField()
    home_address = models.TextField()

    def __str__(self):
        return str(self.home_owner)
