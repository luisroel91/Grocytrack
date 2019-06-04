"""GroceryTracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# Generate schema from our models + views
from rest_framework.schemas import get_schema_view

"""
Routing is controlled at the app level with the exception
of the DRF api-auth routes needed for the browsable API

Default route is to Swagger view
"""

urlpatterns = [
    path('admin/', admin.site.urls),
    # Auth for browseable API
    path('api-auth/', include('rest_framework.urls')),

    # DRF Schema view
    path('schema', get_schema_view()),

    # Auth endpoints
    path('', include('djoser.urls')),
    path('', include('djoser.urls.jwt')),

    # API endpoints
    path('', include('API.urls')),
]
