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
from django.urls import path, include, re_path

from Users.views import FrontendAppView

# Import renderer to render schema as Swagger
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(
    title="GroceryTracker API",
)

"""
Routing is controlled at the app level with the exception
of the DRF api-auth routes needed for the browsable API
"""



urlpatterns = [
    # Built in admin
    path('admin/', admin.site.urls),

    # Auth for browseable API
    path('api-auth/', include('rest_framework.urls')),

    # Swagger view
    path('schema/', schema_view),

    # API endpoints
    path('api/', include('API.urls')),

    # Auth endpoints
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    # Frontend
    re_path(r'^', FrontendAppView.as_view()),


]
