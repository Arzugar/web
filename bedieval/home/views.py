from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, "home/index.html")


def presentations(request):
    return render(request, "home/presentations.html")


def articles(request):
    return HttpResponse("Articles")
