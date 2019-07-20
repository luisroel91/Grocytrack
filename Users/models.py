from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from django.core.validators import DecimalValidator, validate_email

from phonenumber_field.modelfields import PhoneNumberField

# Import our user object manager
from .managers import CustomUserManager

from Lists.models import GroceryItemList


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
        validators=[validate_email]
    )

    # Set date_joined to current time
    date_joined = models.DateTimeField(
        default=timezone.now,
    )

    # Set sales tax rate, this will be editable
    sales_tax_rate = models.DecimalField(
        verbose_name='Sales Tax',
        max_digits=3,
        decimal_places=2,
        editable=True,
        validators=[DecimalValidator(max_digits=3, decimal_places=2)]
    )

    mobile = PhoneNumberField(
    )

    # Set username/email fields + required fields
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'

    REQUIRED_FIELDS = ['email', 'sales_tax_rate', 'mobile']

    # Set object manager
    objects = CustomUserManager()

    # Set string representation for Admin
    def __str__(self):
        return self.username
