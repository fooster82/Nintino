from django.db import models

# Create your models here.
# class Profile(models.Model):
#     username = models.CharField(max_length=30)
#     password = models.CharField(max_length=30)
#     email = models.EmailField(max_length=40)

class Users(models.Model):
    username = models.CharField(null=False , max_length=30)
    wins = models.PositiveIntegerField(default=0)
    loses = models.PositiveIntegerField(default=0)
    draws = models.PositiveIntegerField(default=0)