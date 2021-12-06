
from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from users import views
from django.contrib.auth import views as auth_views
from chippers import views as chippersViews

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', views.signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    path('games/',include('chippers.urls')),
    path('', chippersViews.welcome, name='welcome-page')
]
