# Generated by Django 2.2.3 on 2019-07-20 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0004_auto_20190720_2140'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicationuser',
            name='startup_route',
            field=models.CharField(max_length=10, verbose_name='Default on Login'),
        ),
    ]
