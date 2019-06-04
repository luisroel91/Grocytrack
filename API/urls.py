from django.urls import path

from .views import (
    ApplicationUserListView,
    ApplicationUserDetailView,
    ApplicationUserDeleteView,
    GroceryItemView,
    GroceryItemDetailView,
    GroceryItemListDetailView,
)

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title='GroceryTracker API',
        default_version='v1',
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    # Swagger View
    path('', schema_view.with_ui('swagger', cache_timeout=0)),


    path('users/', ApplicationUserListView.as_view()),
    path('users/<str:username>', ApplicationUserDetailView.as_view()),
    path('users/<str:username>/delete', ApplicationUserDeleteView.as_view()),

    path('items', GroceryItemView.as_view()),
    path('items/<str:UPC>', GroceryItemDetailView.as_view()),
    path('lists/<int:pk>', GroceryItemListDetailView.as_view()),
]
