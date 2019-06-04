from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Import our views
from .views import (
    ApplicationUserViewSet,
    GroceryItemView,
    GroceryItemDetailView,
    GroceryItemListDetailView,
)

from rest_framework import permissions

# Import router & register ViewSets
from rest_framework.routers import SimpleRouter

ApplicationRouter = SimpleRouter()

# ApplicationRouter.register("users", ApplicationUserViewSet)

# Generate Swagger UI
schema_view = get_schema_view(
    openapi.Info(
        title='GroceryTracker API',
        default_version='v1',
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [


    #path('users/', ApplicationUserListView.as_view()),
    #path('users/<str:username>', ApplicationUserDetailView.as_view()),
    #path('users/<str:username>/delete', ApplicationUserDeleteView.as_view()),

    #path('items', GroceryItemView.as_view()),
    #path('items/<str:UPC>', GroceryItemDetailView.as_view()),
    #path('lists/<int:pk>', GroceryItemListDetailView.as_view()),
]
