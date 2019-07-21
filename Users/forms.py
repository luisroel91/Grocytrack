from django.contrib.auth.forms import UserCreationForm, UserChangeForm

# Import our user model
from .models import ApplicationUser


# User creation
class ApplicationUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = ApplicationUser
        fields = [
            'email',
            'mobile',
            'sales_tax_rate',
            'startup_route',
        ]


# User editing
class ApplicationUserChangeForm(UserChangeForm):

    class Meta:
        model = ApplicationUser
        fields = [
            'sales_tax_rate',
            'startup_route',
        ]
