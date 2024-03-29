from django.db import models
from django.conf import settings
from django.core.validators import MinLengthValidator


class GroceryItem(models.Model):

    name = models.CharField(
        verbose_name='Item Name',
        max_length=800,
    )

    price = models.DecimalField(
        verbose_name='Price',
        decimal_places=2,
        max_digits=100,
    )

    unit_price = models.DecimalField(
        verbose_name='Unit Price',
        decimal_places=2,
        max_digits=100,
    )

    """
    upc = models.CharField(
        verbose_name='UPC',
        max_length=12,
        unique=True,
        editable=False,
        validators=[MinLengthValidator(12)],
        blank=True,
    )
    """

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        editable=False,
        on_delete=models.CASCADE,
        related_name="user_items"
    )

    # Set string representation
    def __str__(self):
        return self.name
