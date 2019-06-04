from django.contrib.auth.base_user import BaseUserManager

# Need to define user manager for our custom user class, making sure
# that the email field is required when creating a user.
#
# Each user manager is REQUIRED to have create_user & create_superuser methods


class CustomUserManager(BaseUserManager):

    def create_user(self, username, email, sales_tax_rate, password, **extra_fields):

        # Reject is no email
        if not email:
            raise ValueError('Email is required')

        email = self.normalize_email(email)

        user = self.model(
            username=username,
            email=email,
            sales_tax_rate=sales_tax_rate,
            ** extra_fields,
        )

        # Set new user's password to input password
        user.set_password(password)

        # Persists user to DB
        user.save()

        return user

    def create_superuser(self, username, email, sales_tax_rate, password, **extra_fields):

        # Set admin permissions for superusers
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        # Validate that permission flags have been set
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have staff flag.')

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have SU flag.')

        return self.create_user(
            username,
            email,
            sales_tax_rate,
            password,
            **extra_fields
        )
