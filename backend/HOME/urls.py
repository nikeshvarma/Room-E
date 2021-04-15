from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.AllFlatView.as_view(), name='home_api'),
    path('detail/', views.FlatDetailView.as_view(), name='flat_detail'),
    path('owner-info/', views.FlatContactDetailsView.as_view()),
]
