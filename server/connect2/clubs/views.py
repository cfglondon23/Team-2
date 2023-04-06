from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Club
from .serializer import ClubSerializer

@api_view(['GET'])
def getClub(request):
    club = Club.objects.all()
    serializer = ClubSerializer(club, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postClub(request):
    serializer = ClubSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

'''
@api_view(['UPDATE'])
def updateClub(request, pk):
    club = Club.objects.get(id=pk)
    serializer = ClubSerializer(instance=club, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteClub(request, pk):
    club = Club.objects.get(id=pk)
    club.delete()
    return Response('Item successfully deleted!')
'''