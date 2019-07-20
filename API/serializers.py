from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer
from phonenumber_field.serializerfields import PhoneNumberField
# Import our models

from Users.models import ApplicationUser
from Items.models import GroceryItem
from Lists.models import GroceryItemList

# Serializer for GroceryItems


class GroceryItemSerializer(serializers.ModelSerializer):
    created_by = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())
    created_by_name = serializers.StringRelatedField(source='created_by', read_only=True)

    id = serializers.ReadOnlyField()

    # Eventually we'll add the UPC field to this

    class Meta:
        model = GroceryItem
        fields = ('name', 'price', 'store_name', 'id', 'created_by_name', 'created_by')

    def save(self, **kwargs):
        kwargs["created_by"] = self.fields["created_by"].get_default()

        return super().save(**kwargs)

    lookup_field = 'id'


# Serializer for GroceryItemLists

class GroceryItemListSerializer (WritableNestedModelSerializer):
    items = GroceryItemSerializer(many=True)
    created_by = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())
    id = serializers.ReadOnlyField()
    created_by_name = serializers.StringRelatedField(source='created_by', read_only=True)
    public = serializers.BooleanField(default=False)

    class Meta:
        model = GroceryItemList
        fields = (
            'id',
            'public',
            'created_by_name',
            'created_by',
            'tax_amount',
            'sub_total',
            'store_name',
            'total_items',
            'items',
        )

    def save(self, **kwargs):
        kwargs["created_by"] = self.fields["created_by"].get_default()

        return super().save(**kwargs)


# Serializer for User objects

class ApplicationUserSerializer(serializers.ModelSerializer):
    lookup_field = "id"
    id = serializers.ReadOnlyField()
    mobile = PhoneNumberField()
    sales_tax_rate = serializers.DecimalField(max_digits=3, decimal_places=2)

    class Meta:
        model = ApplicationUser
        fields = (
            'username',
            'email',
            'sales_tax_rate',
            'id',
            'mobile',
        )
