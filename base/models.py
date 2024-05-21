from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User


class Country(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name


class City(models.Model):
    name = models.CharField(max_length=255)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='cities')

    def __str__(self) -> str:
        return self.name


class Activity(models.Model):
    class ActivityChoices(models.TextChoices):
        KIDF = 'KF', 'Kid Friendly'
        MUSEUM = 'MU', 'Museums'
        SHOPPING = 'SPNG', 'Shopping'
        HISTORICAL = 'HST', 'Historical'
        OUTDOORADV = 'OAV', 'Outdoor Adventures'
        ARTCULTURE = 'ARTC', 'Art & Culture'
        OT = 'OT', 'Other'

    activity = models.TextField(max_length=255, choices=ActivityChoices)

    def __str__(self):
        return self.activity


class Itinerary(models.Model):
    title = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self) -> str:
        return self.title


class Route(models.Model):
    class ActivityChoices(models.TextChoices):
        KIDF = 'KF', 'Kid Friendly'
        MUSEUM = 'MU', 'Museums'
        SHOPPING = 'SPNG', 'Shopping'
        HISTORICAL = 'HST', 'Historical'
        OUTDOORADV = 'OAV', 'Outdoor Adventures'
        ARTCULTURE = 'ARTC', 'Art & Culture'
        OT = 'OT', 'Other'
    itinerary = models.ForeignKey(Itinerary, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    activity = models.ManyToManyField(Activity)

    # self __str__(self):
    #     return self.activity
