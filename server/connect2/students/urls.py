from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.student_list),
    path('verify_user/', views.valid_login_details),
]