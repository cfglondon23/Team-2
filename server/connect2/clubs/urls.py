from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.api_overview),
    path('get/', views.club_list),
    path('post/', views.club_create),
    path("put/", views.club_update),
    path("delete/", views.club_delete),
]
