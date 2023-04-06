from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Club
from .serializer import ClubSerializer


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'Get': '/get/',
        'Post': '/club-create/',
        'Put': '/club-update/<str:pk>/',
        'Delete': '/club-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def club_list(request):
    clubs = Club.objects.all()
    serializer = ClubSerializer(clubs, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def club_create(request):
    serializer = ClubSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['PUT'])
def club_update(request, pk):
    club = Club.objects.get(id=pk)
    serializer = ClubSerializer(instance=club, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def club_delete(request, pk):
    club = Club.objects.get(id=pk)
    club.delete()
    return Response('Item succsesfully delete!')
