# Generated by Django 4.2 on 2023-04-06 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clubs', '0003_club_age_range_club_contact_person_club_location_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='club',
            name='likes',
            field=models.IntegerField(default=0),
        ),
    ]