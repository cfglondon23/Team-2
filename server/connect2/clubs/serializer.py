from rest_framework import serializers
from .models import Club

class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model=Club
        fields=('name','description')
        '''add tags e.g. maths, science, environment, etc.
           add age (age ranges e.g. primary, secondary)
           add borough / location
           add image of contact person
           add contact person'''