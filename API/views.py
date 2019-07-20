# Import DRF generic views
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions

# Import our models

from Items.models import GroceryItem
from Lists.models import GroceryItemList

# Import our serializers

from .serializers import GroceryItemSerializer, GroceryItemListSerializer

# Import our schema

from GroceryTracker.schema_view import CustomSchema


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

    schema = CustomSchema()


class GroceryItemListViewSet(ModelViewSet):
    """
    retrieve:
    Return a list using its ID

    list:
    Return all lists for this user

    create:
    Create a list

    update:
    Replace a list using its ID

    partial_update:
    Update a list using its ID

    delete:
    Delete a list if you are its owner
    """

    serializer_class = GroceryItemListSerializer

    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        queryset = GroceryItemList.objects.filter(created_by=self.request.user)

        return queryset

    schema = CustomSchema()


class PublicListView(ListAPIView):
    """
    get:
    Get all public lists
    """

    serializer_class = GroceryItemListSerializer

    def get_queryset(self):
        public_lists = GroceryItemList.objects.filter(public=True)

        return public_lists

    schema = CustomSchema()


class PublicListDetailView(RetrieveAPIView):
    """
    get:
    Get public list by ID
    """
    queryset = GroceryItemList.objects.filter(public=True)

    serializer_class = GroceryItemListSerializer

    lookup_field = 'id'

    schema = CustomSchema()
