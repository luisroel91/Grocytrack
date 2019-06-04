from django.contrib import admin

# Import our model
from .models import GroceryItem

# Register model with admin
admin.site.register(GroceryItem)