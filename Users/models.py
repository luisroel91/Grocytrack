from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone

# Import our user object manager
from .managers import CustomUserManager


# Define our user model
class ApplicationUser(AbstractBaseUser, PermissionsMixin):

    # Default Django permissions flags
    is_active = models.BooleanField(
        verbose_name='Is Active',
        default=True,
    )
    is_staff = models.BooleanField(
        verbose_name='Is Staff',
        default=False,
    )
    is_superuser = models.BooleanField(
        verbose_name='Is Admin',
        default=False,
    )

    # Make sure usernames/emails are unique (1 user per email)
    username = models.CharField(
        max_length=100,
        unique=True,
    )
    email = models.EmailField(
        verbose_name='Email',
        unique=True,
    )

    # Set date_joined to current time
    date_joined = models.DateTimeField(
        default=timezone.now,
    )

    # Set sales tax rate, this will be editable
    sales_tax_rate = models.DecimalField(
        verbose_name='Sales Tax',
        decimal_places=2,
        max_digits=10,
        editable=True,
    )

    # Set username/email fields + required fields
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'

    REQUIRED_FIELDS = ['email', 'sales_tax_rate']

    # Set object manager
    objects = CustomUserManager()

    # Set string representation for Admin
    def __str__(self):
        return self.username
