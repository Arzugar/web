from django.http import HttpResponse
from django.shortcuts import render

from .models import Member, Event
# Create your views here.


def index(request):
    members = Member.objects.all()
    events = Event.objects.all()
    
    context = {
        'members': members,
        'events': events,
    }

    return render(request, "home/index.html", context)


def presentations(request):
    return render(request, "home/presentations.html")


def articles(request):
    return HttpResponse("Articles")
