from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.HomeDetail.as_view(), name='home_api'),
]
