from django.test import TestCase

# Create your tests here.
from chippers.models import Game
from chippers.models import Pieces

class ChipperTestCase(TestCase):
    def setUp(self):
        Game.objects.create(gameID=123, typeOfGame="normal",turns=1, winner=1)
        Pieces.objects.create(piece=12, location="11",alive=True,queen=False,gameID=123)

