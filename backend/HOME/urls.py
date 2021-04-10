from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.AllFlatView.as_view(), name='home_api'),
]
