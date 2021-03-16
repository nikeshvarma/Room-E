from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Flat(models.Model):
    flat_owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owner')
    flat_price = models.PositiveIntegerField()
    flat_size = models.PositiveIntegerField()
    flat_rooms = models.PositiveIntegerField()
    flat_for = models.CharField(max_length=2)
    flat_address = models.CharField(max_length=200)
    flat_pincode = models.CharField(max_length=6)
    flat_city = models.CharField(max_length=100)
    flat_state = models.CharField(max_length=100)
    is_verified_flat = models.BooleanField(default=False)

    # Images
    photo1 = models.ImageField(upload_to='flat_image', null=False, blank=False)
    photo2 = models.ImageField(upload_to='flat_image', null=True, blank=True)
    photo3 = models.ImageField(upload_to='flat_image', null=True, blank=True)
    photo4 = models.ImageField(upload_to='flat_image', null=True, blank=True)
    photo5 = models.ImageField(upload_to='flat_image', null=True, blank=True)

    def __str__(self):
        return str(self.flat_owner)
