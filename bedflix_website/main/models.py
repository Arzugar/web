from django.db import models


def to_path(instance, filename):
    if instance.id:
        return f'image/{instance.type}/img{instance.id}.png'
    return f'image/temp_{filename}'


class Element(models.Model):
    titre = models.CharField(max_length=20, default="")
    description = models.CharField(max_length=1000, default="")
    image = models.ImageField(upload_to=to_path, blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.id is None:
            saved_image = self.image
            self.image = None
            super(Element, self).save(*args, **kwargs)
            self.image = saved_image
            if 'force_insert' in kwargs:
                kwargs.pop('force_insert')

        super(Element, self).save(*args, **kwargs)


class Membre(Element):
    type = 'membre'
    roles = models.CharField(max_length=1000, default="")
    poles = models.CharField(max_length=1000, default="")


class Pole(Element):
    type = 'pole'
    membres = models.CharField(max_length=1000, default="")


class Evenement(Element):
    type = 'evenement'
    date = models.DateTimeField()
    lieux = models.CharField(max_length=1000, default="")
