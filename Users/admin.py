from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Import our user forms and model
from .forms import ApplicationUserCreationForm, ApplicationUserChangeForm
from .models import ApplicationUser


# Define our user admin
class ApplicationUser(UserAdmin):

    # Select user model
    model = ApplicationUser

    # Select form to create users
    add_form = ApplicationUserCreationForm

    # Select form to edit user
    form = ApplicationUserChangeForm

    # Select list display items
    list_display = ('username', 'email', 'sales_tax_rate')

    # Select what we can filter by in list view
    list_filter = ('username', 'sales_tax_rate')

    # Define field sets

    fieldsets = (
        (
            None, {
                'fields': (
                    ''
                )
            }
        )
    )