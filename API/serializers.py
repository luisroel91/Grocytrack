from rest_framework import serializers

# Import our models

from Users.models import ApplicationUser
from Items.models import GroceryItem
from Lists.models import GroceryItemList

# Serializer for GroceryItems


class GroceryItemSerializer(serializers.ModelSerializer):
    created_by = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = GroceryItem
        fields = ('name', 'price', 'upc', 'created_by')

    lookup_field = 'upc'


# Serializer for GroceryItemLists

class GroceryItemListSerializer (serializers.ModelSerializer):
    items = GroceryItemSerializer(many=True)
    created_by = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = GroceryItemList
        fields = ('items', 'sub_total', 'tax_amount', 'total_items', 'created_by')

    lookup_field = 'id'

"""
    def create(self, validated_data):
        items_data = validated_data.pop('items')

        instance = GroceryItemList.objects.create(**validated_data)

        for item in items_data:
            item_instance = GroceryItem.objects.create(item)
            item_instance.save()
            instance.items.add(item_instance)

        instance.save()

        return instance

    def update(self, instance, validated_data):
        items_data = validated_data.pop('items')

        instance.items = validated_data.get('items')

        for item in items_data:
            if item in instance.items

"""
# Serializer for User objects

class ApplicationUserSerializer(serializers.ModelSerializer):
    lookup_field = "id"

    user_lists = serializers.SerializerMethodField()

    class Meta:
        model = ApplicationUser
        fields = ('username', 'email', 'sales_tax_rate', 'user_lists')

    def get_user_lists(self, obj):
        lists = GroceryItemList.objects.filter(created_by_id=serializers.CurrentUserDefault())

        return lists
