from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserSignupForm

def signup(req):
    if req.method == 'POST':
        form = UserSignupForm(req.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(req, f'Welcome, {username}!')
            return redirect('login') #need to change later to another page
    else:
        form = UserSignupForm()
    data = {'form': form}
    # return redirect('https://google.com')
    return render(req, 'users/signup.html', data)


def login(req):
    if req.method == "POST":
        form = authentication_form(data=req.POST)
        if form.is_valid():
            # Ensure the user-originating redirection url is safe.
            if not is_safe_url(url=redirect_to, host=req.get_host()):
                redirect_to = settings.LOGIN_REDIRECT_URL