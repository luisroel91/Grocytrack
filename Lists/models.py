from django.db import models
from django.conf import settings
from django_extensions.db.models import TimeStampedModel

# Import our Item Model
from Items.models import GroceryItem


# Define our grocery item list model
class GroceryItemList(TimeStampedModel):

    items = models.ManyToManyField(
        GroceryItem,
        verbose_name='Grocery Items',
        related_name='items',
        blank=True,
    )

    sub_total = models.DecimalField(
        verbose_name='Subtotal',
        decimal_places=2,
        max_digits=100,
    )

    tax_amount = models.DecimalField(
        verbose_name='Sales Tax',
        decimal_places=2,
        max_digits=100,
    )

    total_items = models.IntegerField(
        verbose_name='Total Items',
    )

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        editable=False,
        on_delete=models.CASCADE,
        related_name="user_lists"
    )
