from django.db import models
from django.utils.translation import gettext_lazy as _


class Country(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name


class City(models.Model):
    name = models.CharField(max_length=255)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

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


class Route(models.Model):
    class ActivityChoices(models.TextChoices):
        KIDF = 'KF', 'Kid Friendly'
        MUSEUM = 'MU', 'Museums'
        SHOPPING = 'SPNG', 'Shopping'
        HISTORICAL = 'HST', 'Historical'
        OUTDOORADV = 'OAV', 'Outdoor Adventures'
        ARTCULTURE = 'ARTC', 'Art & Culture'
        OT = 'OT', 'Other'

    city = models.ForeignKey(City, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    activity = models.ManyToManyField(Activity)

    # self __str__(self):
    #     return self.activity
