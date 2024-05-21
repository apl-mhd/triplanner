from django.shortcuts import render
from django.http import HttpResponse
from . models import Country, City


from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


def index(request):
    countries = Country.objects.prefetch_related('cities')

    x = [{'name': country.name, 'cities': [city.name for city in country.cities.all()]}
         for country in countries]

    print(x, 'apel')
    # [city for city in country.cities.all()]

    # data = []
    # for country in countries:
    #     temp = {'country': {'id': country.id,
    #                         'name': country.name}, 'cities': []}
    #     for city in country.cities.all():
    #         temp['cities'].append({'id': city.id, 'name': city.name})

    #     data.append(temp)
    # print(data)

    return render(request, 'base/index.html')
