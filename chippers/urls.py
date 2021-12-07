from django.urls import path, re_path
from . import views

urlpatterns = [
    path('',views.index, name='games-index'),
    path('chippers', views.index),
    path('lobby', views.index),


]