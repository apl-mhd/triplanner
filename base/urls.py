from django.conf import settings
from django.conf.urls.static import static

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('country/', views.getCountryDetails, name='countr'),
    path('add-tour-plan/', views.addTourPlan, name='add_tour_plan'),
]

# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL,
#                           document_root=settings.STATIC_ROOT)
