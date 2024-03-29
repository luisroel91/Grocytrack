# Generated by Django 2.2.3 on 2019-07-20 01:49

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Items', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroceryItemList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('sub_total', models.DecimalField(decimal_places=2, max_digits=100, verbose_name='Subtotal')),
                ('tax_amount', models.DecimalField(decimal_places=2, max_digits=100, verbose_name='Sales Tax')),
                ('total_items', models.IntegerField(verbose_name='Total Items')),
                ('store_name', models.CharField(max_length=110, validators=[django.core.validators.MinLengthValidator(3)], verbose_name='Item Grocery Store Name')),
                ('public', models.BooleanField(default=False)),
                ('created_by', models.ForeignKey(editable=False, on_delete=django.db.models.deletion.CASCADE, related_name='user_lists', to=settings.AUTH_USER_MODEL)),
                ('items', models.ManyToManyField(related_name='items', to='Items.GroceryItem', verbose_name='Grocery Items')),
            ],
            options={
                'ordering': ('-modified', '-created'),
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
    ]
