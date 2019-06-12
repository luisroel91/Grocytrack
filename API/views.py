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
    retrieve:
    Return an item using its ID

    list:
    Return all items

    create:
    Create an item

    update:
    Replace an item using its ID

    partial_update:
    Update an item using its ID

    delete:
    Delete an item if you are its owner
    """

    queryset = GroceryItem.objects.all()
    serializer_class = GroceryItemSerializer

    permission_classes = (permissions.IsAuthenticated,)


class GroceryItemListViewSet(ModelViewSet):
    """
    retrieve:
    Return a list using its ID

    list:
    Return all lists

    create:
    Create a list

    update:
    Replace a list using its ID

    partial_update:
    Update a list using its ID

    delete:
    Delete a list if you are its owner
    """
    queryset = GroceryItemList.objects.all()
    serializer_class = GroceryItemListSerializer

    permission_classes = (permissions.IsAuthenticated,)




