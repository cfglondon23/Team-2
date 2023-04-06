from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import HttpResponse

from .models import Student
from .serializer import StudentSerializer


@api_view(['GET'])
def student_list(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_student(request):
    serializer = StudentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def valid_login_details(request):
    body = request.data

    email = body['email']
    password = body['password']

    try:
        student = Student.objects.get(email=email, password=password)
        return HttpResponse(status=200)
    except:
        return HttpResponse(status=400)
