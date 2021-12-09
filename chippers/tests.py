from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse

# Create your tests here.

class BaseTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')


class TestBasicViews(BaseTestCase):
    c = Client()


# class TestLoggedInViews(BaseTestCase):

#     def setUp(self):
#         self.c = Client()
#         self.c.login(username="myusername", password="mypassword")

#     def test_create_page_load(self):
#         response = self.c.get(reverse('dog-create'))
#         assert "dogs/new.html" in [t.name for t in response.templates]

#     def test_create_new_dog(self):
#         response = self.c.post(reverse('dog-create'), {
#             'name': 'new_test_dog',
#             'breed': self.poodle_breed.id
#         })
#         assert Dog.objects.filter(name='new_test_dog').exists()

#     def test_show_page_load(self):
#         response = self.c.get(reverse('dog-show', kwargs={'dog_id': self.dog.id}))
#         assert "dogs/show.html" in [t.name for t in response.templates]

class TestLoggedInViews(BaseTestCase):
    c = Client()

    def setUp(self):
        self.c = Client()
        self.c.login(username='myusername', password='mypassword')

    def test_react_default(self):
        response = self.c.get(reverse('games-index'))
        assert "chippers/index.html" in [ t.name for t in response.templates]
    
    def test_react_chippers(self):
        response = self.c.get(reverse('chippers-page'))
        assert "chippers/index.html" in [ t.name for t in response.templates]
   
    def test_react_lobby(self):
        response = self.c.get(reverse('lobby-page'))
        assert "chippers/index.html" in [ t.name for t in response.templates]
    
    def test_react_winner(self):
        response = self.c.get(reverse('winners-page'))
        assert "chippers/index.html" in [ t.name for t in response.templates]
    
    def test_react_commingsoon(self):
        response = self.c.get(reverse('commingsoon-page'))
        assert "chippers/index.html" in [ t.name for t in response.templates]
    
