from django.db import models
import sys
sys.path.append('../')
from students.models import Student
sys.path.append('../')
from clubs.models import Club
# Create your models here.


class StudentClubLikes(models.Model):
    club = models.ForeignKey(Club, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
