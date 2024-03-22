from django.urls import path

from . import views

app_name = "main"
urlpatterns = [
    path('membres', views.get_membres_id),
    path('poles', views.get_poles_id),
    path('evenements', views.get_evenements_id),
    path('membre/<int:id>', views.get_membre),
    path('pole/<int:id>', views.get_pole),
    path('evenement/<int:id>', views.get_evenement),
]