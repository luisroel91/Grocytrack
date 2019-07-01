# Generated by Django 2.2.2 on 2019-07-01 17:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Items', '0003_auto_20190611_1806'),
    ]

    operations = [
        migrations.AddField(
            model_name='groceryitem',
            name='created_by',
            field=models.ForeignKey(default=1, editable=False, on_delete=django.db.models.deletion.CASCADE, related_name='user_items', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
