from rest_framework import serializers
from .models import StudentClubLikes

class StudentClubLikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentClubLikes
        fields = ('club', 'student')
