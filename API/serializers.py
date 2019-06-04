from rest_framework import serializers

# Import our models

from Users.models import ApplicationUser
from Items.models import GroceryItem
from Lists.models import GroceryItemList


# Serializer for User objects

class ApplicationUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = ApplicationUser
        fields = ('username', 'email', 'sales_tax_rate')

    lookup_field = 'username'


# Serializer for GroceryItems

class GroceryItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = GroceryItem
        fields = ('name', 'price', 'upc')

    lookup_field = 'upc'


# Serializer for GroceryItemLists

class GroceryItemListSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroceryItemList
        fields = '__all__'

    lookup_field = 'id'


