from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Flat(models.Model):
    id = models.BigAutoField(primary_key=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owner')
    rent = models.PositiveIntegerField()
    security_deposit = models.PositiveIntegerField()
    size = models.PositiveIntegerField()
    rooms = models.PositiveIntegerField()
    available_for = models.CharField(max_length=10)
    locality = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    pincode = models.CharField(max_length=6)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    description = models.TextField()
    verified = models.BooleanField(default=False)
    post_datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.owner)


class FlatImages(models.Model):
    flat = models.ForeignKey(Flat, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to="flat_images")

    def __str__(self):
        return str(self.flat.id)


class FlatAmenities(models.Model):
    flat = models.OneToOneField(Flat, on_delete=models.CASCADE, related_name='amenities')
    celling_fan = models.BooleanField()
    air_conditioner = models.BooleanField()
    bed = models.BooleanField()
    sofa = models.BooleanField()
    water_purifier = models.BooleanField()
    geyser = models.BooleanField()
    parking = models.BooleanField()

    def __str__(self):
        return str(self.flat.id)

# class FlatQuestionAnswer(models.Model):
#     flat = models.ForeignKey(Flat, on_delete=models.CASCADE)
#     question = models.TextField()
#     answer = models.TextField()
