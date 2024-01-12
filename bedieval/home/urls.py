from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("presentations/", views.presentations, name="presentations"),
    path("articles/", views.articles, name="articles"),
]
