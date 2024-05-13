from django.contrib import admin
from .models import City, Country, Route, Activity
# Register your models here.


admin.site.register(City)
admin.site.register(Country)
admin.site.register(Route)
admin.site.register(Activity)
