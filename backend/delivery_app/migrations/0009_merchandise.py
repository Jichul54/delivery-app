# Generated by Django 5.0.3 on 2024-03-17 08:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('delivery_app', '0008_add_delivery_status_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Merchandise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('merchandise_name', models.CharField(max_length=250, unique=True, verbose_name='merchandise_name')),
                ('warehouse_address', models.CharField(max_length=250, unique=True, verbose_name='Warehouse_address')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='delivery_app.company')),
            ],
        ),
    ]
