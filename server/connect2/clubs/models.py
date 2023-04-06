from django.db import models

# Create your models here.
class Club(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    location = models.CharField(max_length=200, default="")
    tags = models.CharField(max_length=200, default="")
    age_range = models.CharField(max_length=200, default="")
    contact_person = models.CharField(max_length=200, default="")