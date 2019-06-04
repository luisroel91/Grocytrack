# Import DRF generic views
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

# Import our models

from Items.models import GroceryItem
from Lists.models import GroceryItemList

# Import our serializers

from .serializers import GroceryItemSerializer, GroceryItemListSerializer

# Generic views for now


class GroceryItemViewSet(ModelViewSet):
    """
    get:
    Return a list of all existing items
    """

    queryset = GroceryItem.objects.all()
    serializer_class = GroceryItemSerializer

    permission_classes = (permissions.IsAuthenticated,)


class GroceryItemListViewSet(ModelViewSet):
    """
    get:
    Return list using its ID

    put:
    Create a list

    patch:
    Update a list using its ID

    delete:
    Delete a list if you are its owner
    """
    queryset = GroceryItemList.objects.all()
    serializer_class = GroceryItemListSerializer

    permission_classes = (permissions.IsAuthenticated,)




