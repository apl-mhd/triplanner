from django.shortcuts import render
from django.http import HttpResponse
from . models import Country, City, Activity, Itinerary, Route
from django.db.models import Q
from django.http import JsonResponse
from django.core import serializers
from django.shortcuts import get_list_or_404
import json
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


def index(request):
    activities = Activity.objects.all()

    data = []
    for i in activities:
        data.append({'id': i.id, 'name': i.get_activity_display()})

    data = json.dumps(list(data))
    context = {
        'activities': data
    }

   # return render(request, 'base/index.html', context={'data': dumps({'name': 'name'})})
    return render(request, 'base/index.html', context=context)


def getCountryDetails(request):
    q = request.GET.get('q')

    if q:
        countries = Country.objects.filter(Q(name__icontains=q) | Q(
            cities__name__icontains=q)).distinct().prefetch_related('cities')
    else:
        countries = Country.objects.prefetch_related('cities')

    data = [{'id': city.id, 'country_name': country.name, 'name': city.name}
            for country in countries
            for city in country.cities.all()]

  #  data = [ for city in country.cities.all()] for country in countries

    return JsonResponse(data, safe=False)


def addTourPlan(request):

    data = json.loads(request.body)

    print(data)

    itinerary = Itinerary.objects.create(
        title=data.get('title'), created_by=request.user)

    if itinerary:
        for item in data.get('itineraryDetails'):
            city = City.objects.get(id=item['city'])

            route = Route(itinerary=itinerary, city=city,
                          start_date=item['startDate'], end_date=item['endDate'])

            route.save()
            activities_ids = data.get('activities')
            if activities_ids:
                activities = Activity.objects.filter(id__in=activities_ids)
                route.activity.add(*activities)

            return JsonResponse({'id': itinerary.id, 'title': itinerary.title, 'created_by': itinerary.created_by.id}, status=201)

    return JsonResponse({'error': 'Invalid data'}, status=400)

    print('apel', request.user.id)
    print((data['itineraryDetails']))
    # for i in :
    # for i in data.itineraryDetails:
    #     print(i)

    return HttpResponse('asu')
