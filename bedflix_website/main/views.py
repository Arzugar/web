from django.shortcuts import render

from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.shortcuts import get_object_or_404
from .models import Membre, Pole, Evenement
from django.http import JsonResponse

# Serve Single Page Application
index_view = never_cache(TemplateView.as_view(
    template_name="index.html"))

def get_membres_id(_):
    elements = Membre.objects.all()
    return JsonResponse({'id': [element.id for element in elements]})

def get_poles_id(_):
    elements = Pole.objects.all()
    return JsonResponse({'id': [element.id for element in elements]})

def get_evenements_id(_):
    elements = Evenement.objects.all()
    return JsonResponse({'id': [element.id for element in elements]})

def get_membre(_, id):
    element = get_object_or_404(Membre, pk=id)
    values = ['id', 'titre', 'description', 'image', 'poles', 'roles']
    data = {value: str(element.__dict__[value]) for value in values}
    return JsonResponse(data)

def get_pole(_, id):
    element = get_object_or_404(Pole, pk=id)
    values = ['id', 'titre', 'description', 'image', 'membres']
    data = {value: str(element.__dict__[value]) for value in values}
    return JsonResponse(data)

def get_evenement(_, id):
    element = get_object_or_404(Evenement, pk=id)
    values = ['id', 'titre', 'description', 'image', 'date', 'lieux']
    data = {value: str(element.__dict__[value]) for value in values}
    return JsonResponse(data)