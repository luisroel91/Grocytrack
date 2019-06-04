# Generated by Django 2.2.2 on 2019-06-04 07:48

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Items', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groceryitem',
            name='UPC',
            field=models.CharField(max_length=12, unique=True, validators=[django.core.validators.MinLengthValidator(12)]),
        ),
    ]
