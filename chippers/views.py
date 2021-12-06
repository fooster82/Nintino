from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView

# Create your views here.

@login_required
def index(req,*args, **kwargs):
    return render(req,'chippers/index.html')

def welcome(req):
    return render(req, 'chippers/landingPage.html')

# def chipper(req):
#     return render(req, 'chippers/src/Pages/ChippersPage/index.jsx')
