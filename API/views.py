# Import DRF generic views
from rest_framework import generics
from rest_framework import permissions

# Import our models

from Users.models import ApplicationUser
from Items.models import GroceryItem
from Lists.models import GroceryItemList

# Import our serializers

from .serializers import ApplicationUserSerializer, GroceryItemSerializer, GroceryItemListSerializer

# Generic views for now


class ApplicationUserListView(generics.ListCreateAPIView):
    """
    get:
    Return a User via their username

    post:
    Create a User
    """
    queryset = ApplicationUser.objects.all()
    serializer_class = ApplicationUserSerializer

    lookup_field = 'username'


class ApplicationUserDetailView(generics.ListAPIView):
    """
    get:
    Return a User via their username
    """
    queryset = ApplicationUser.objects.all()
    serializer_class = ApplicationUserSerializer

    lookup_field = 'username'

    permission_classes = (permissions.IsAuthenticated,)


class ApplicationUserDeleteView(generics.DestroyAPIView):
    """
    delete:
    Delete a User
    """
    queryset = ApplicationUser.objects.all()
    serializer_class = ApplicationUserSerializer

    lookup_field = 'username'


class GroceryItemView(generics.ListAPIView):
    """
    get:
    Return a list of all existing items
    """

    queryset = GroceryItem.objects.all()
    serializer_class = GroceryItemSerializer

    permission_classes = (permissions.IsAuthenticated,)


class GroceryItemDetailView(generics.RetrieveUpdateAPIView):
    """
    get:
    Return a particular item using its UPC

    put:
    Create a particular item using its UPC

    patch:
    Update item name or price using its UPC

    """
    lookup_field = 'UPC'

    queryset = GroceryItem.objects.all()
    serializer_class = GroceryItemSerializer


class GroceryItemListDetailView(generics.RetrieveUpdateDestroyAPIView):
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




