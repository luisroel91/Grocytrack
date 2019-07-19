from django.db import models
from Items.models import GroceryItem
from .models import GroceryItemList


class GroceryItemListManager(models.manager):

    def create(self, items, sub_total, tax_amount, total_items, created_by):

        list_instance = GroceryItemList(
            sub_total=sub_total,
            tax_amount=tax_amount,
            total_items=total_items,
            created_by=created_by,
        )

        for item in items:
            item_instance = GroceryItem.objects.create(item)
            item_instance.save()
            list_instance.items.add(item_instance)

        list_instance.save()

        return list_instance