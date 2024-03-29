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

# Import renderer to render schema as Swagger
from .schema_view import schema_view
from API.views import PublicListView, PublicListDetailView

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
    path('', schema_view),

    # API endpoints
    path('', include('API.urls')),

    # Auth endpoints
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('pin_login/', include('drfpasswordless.urls')),

    # Public lists
    path('public_lists/', PublicListView.as_view()),
    path('public_lists/<int:id>/', PublicListDetailView.as_view()),

]
