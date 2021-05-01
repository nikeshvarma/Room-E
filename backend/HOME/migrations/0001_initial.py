# Generated by Django 3.1.6 on 2021-04-10 10:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Flat',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('rent', models.PositiveIntegerField()),
                ('security_deposit', models.PositiveIntegerField()),
                ('size', models.PositiveIntegerField()),
                ('rooms', models.PositiveIntegerField()),
                ('available_for', models.CharField(max_length=10)),
                ('locality', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('pincode', models.CharField(max_length=6)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('verified', models.BooleanField(default=False)),
                ('post_datetime', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owner', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='FlatImages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='flat_images')),
                ('flat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HOME.flat')),
            ],
        ),
        migrations.CreateModel(
            name='FlatAmenities',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('celling_fan', models.BooleanField()),
                ('air_conditioner', models.BooleanField()),
                ('bed', models.BooleanField()),
                ('sofa', models.BooleanField()),
                ('water_purifier', models.BooleanField()),
                ('geyser', models.BooleanField()),
                ('parking', models.BooleanField()),
                ('flat', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='HOME.flat')),
            ],
        ),
    ]
