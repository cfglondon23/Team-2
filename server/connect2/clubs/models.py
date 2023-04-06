from students.models import Student
from django.db import models

class Club(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    location = models.CharField(max_length=200, default="")
    tags = models.CharField(max_length=200, default="")
    age_range = models.CharField(max_length=200, default="")
    contact_person = models.CharField(max_length=200, default="")
    likes = models.IntegerField(default=0)
