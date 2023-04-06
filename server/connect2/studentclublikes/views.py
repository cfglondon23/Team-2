from django.shortcuts import render
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import StudentClubLikes
from .serializer import StudentClubLikesSerializer
from django.http import HttpResponse
import sys
sys.path.append('../')
from students.models import Student
sys.path.append('../')
from clubs.models import Club

# Create your views here.
@api_view(['GET', 'UPDATE'])
def club_like(request):
    body = request.data

    if request.method == 'GET':
        studentclublikes = StudentClubLikes.objects.all()
        serializer = StudentClubLikesSerializer(studentclublikes, many=True)
        return Response(serializer.data)

    if request.method == "UPDATE":
        try:
            club = Club.objects.get(name=body['name'])
            student = Student.objects.get(email=body['email'])
        except:
            return HttpResponse(status=400)

        try:
            has_student_liked = StudentClubLikes.objects.get(
                club=club, student=student)
            return HttpResponse(status=400)
        except:
            StudentClubLikes.objects.create(club=club, student=student)
            club.likes = club.likes + 1
            club.save()
            return Response('Successfully liked!')