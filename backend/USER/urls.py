from django.urls import path
from . import views

urlpatterns = [
    path('info/', views.UserInfoView.as_view(), name='user-info'),
    path('owner-register/', views.OwnerRegisterView.as_view(), name='user-info'),
]
