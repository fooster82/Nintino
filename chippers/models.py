from django.db import models

# Create your models here.

class Game(models.Model):
    gameID =models.PositiveIntegerField(max_length=30)
    typeOfGame = models.CharField(max_length=30)
    turns = models.PositiveIntegerField(default=0)
    winner = models.PositiveIntegerField(default=0) # 0 for draw, 1 for player 1 , 2 for player 2


class Pieces(models.Model):
    piece =models.PositiveIntegerField(default=12) 
    location = models.CharField(max_length=3)
    alive = models.BooleanField()
    queen = models.BooleanField()
    gameID = models.ForeignKey(Game, null=False , on_delete= models.PROTECT)

