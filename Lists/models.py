from django.db import models
from django.conf import settings
from django_extensions.db.models import TimeStampedModel
from django.core.validators import MinLengthValidator

# Import our Item Model
from Items.models import GroceryItem


# Define our grocery item list model
class GroceryItemList(TimeStampedModel):

    items = models.ManyToManyField(
        GroceryItem,
        verbose_name='Grocery Items',
        related_name='items',
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

    store_name = models.CharField(
        verbose_name="Item Grocery Store Name",
        max_length=110,
        validators=[MinLengthValidator(3)]
    )

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        editable=False,
        on_delete=models.CASCADE,
        related_name="user_lists"
    )

    public = models.BooleanField(
        default=False,
        editable=True,
    )
