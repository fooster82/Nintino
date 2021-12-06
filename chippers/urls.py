from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='games-index'),
    path('chippers/',views.index),
    # path('/chippers',views.chipper, name='games-chipper')
]
