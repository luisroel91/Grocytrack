from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Import our user forms and model
from .forms import ApplicationUserCreationForm, ApplicationUserChangeForm
from .models import ApplicationUser


# Define our user admin
class ApplicationUserAdmin(UserAdmin):

    # Select user model
    model = ApplicationUser

    # Select form to create users
    add_form = ApplicationUserCreationForm

    # Select form to edit user
    form = ApplicationUserChangeForm

    # Select list display items
    list_display = ('username', 'email', 'mobile', 'sales_tax_rate')

    # Select what we can filter by in list view
    list_filter = ('username', 'sales_tax_rate')

    # Define field sets

    fieldsets = (
        (
            None, {
                'fields': (
                    'username',
                    'email',
                    'mobile',
                    'sales_tax_rate',
                    'password',
                )
            }
        ),
        (
            'Permissions', {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                )
            }
        ),
        (
            'Personal Info', {
                'fields': (
                    'date_joined',
                )
            }
        )
    )

    # Define fieldsets used to create user
    add_fieldsets = (
        (
            None, {
                'fields': (
                    'username',
                    'email',
                    'mobile',
                    'sales_tax_rate',
                    'startup_route',
                    'password1',
                    'password2',
                )
            }
        ),
        (
            'Permissions', {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                )
            }
        ),
        (
            'Personal Info', {
                'fields': (
                    'date_joined',
                )
            }
        )
    )

    # Define fields we use for searching in admin
    search_fields = (
        'username',
        'email',
        'mobile',
        'date_joined',
    )

    # Set default ordering from date_joined
    ordering = (
        'date_joined',
    )

    # Pass along readonly fields and set username/email/date_joined
    # as read only fields
    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('username', 'date_joined', 'email')
        return self.readonly_fields


# Register our user model and user model admin with admin site
admin.site.register(ApplicationUser, ApplicationUserAdmin)

