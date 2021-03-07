from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class House(models.Model):
    # HOUSE_TYPE=[
    #   ()
    # ]
    home_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    home_price = models.FloatField()
    home_address = models.TextField()

    # image=models.ImageField()
    # home_type = models.CharField(max_length=4)
    class Meta:
        def __str__(self):
            return self.home_owner
