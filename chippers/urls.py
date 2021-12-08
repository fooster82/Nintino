from django.urls import path, re_path
from . import views
from django.contrib.auth import views as auth_views
urlpatterns = [
    path('',views.index, name='games-index'),
    path('chippers', views.index),
    path('lobby', views.index),
    path('winner', views.index),
    path("logout", auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout')

]