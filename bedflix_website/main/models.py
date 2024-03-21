from django.db import models

def to_path(instance, filename): 
    return 'image/{0}_{1}'.format(instance.titre.replace(' ', '_'), filename)

# Create your models here.
class Element(models.Model):
    titre = models.CharField(max_length=20, default="")
    description = models.CharField(max_length=1000, default="")
    image = models.ImageField(upload_to = to_path) 

class Membre(Element):
    roles = models.CharField(max_length=1000, default="")
    poles = models.CharField(max_length=1000, default="")

class Pole(Element):
    membres = models.CharField(max_length=1000, default="")

class Evenement(Element):
    date = models.DateTimeField()
    lieux = models.CharField(max_length=1000, default="")