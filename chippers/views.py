from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required
def index(req):
    return render(req,'chippers/index.html')

