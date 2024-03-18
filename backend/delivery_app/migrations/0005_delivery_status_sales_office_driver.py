# Generated by Django 5.0.3 on 2024-03-17 08:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('delivery_app', '0004_add_company_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Delivery_Status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('derivery_status_name', models.CharField(max_length=150, unique=True, verbose_name='derivery_status_name')),
            ],
        ),
        migrations.CreateModel(
            name='Sales_office',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sales_office_name', models.CharField(max_length=150, unique=True, verbose_name='Sales_office_name')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='delivery_app.company')),
            ],
        ),
        migrations.CreateModel(
            name='Driver',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sales_office', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='delivery_app.sales_office')),
                ('role_id', models.IntegerField(verbose_name='role_id')),
                ('drivername', models.CharField(max_length=150, unique=True, verbose_name='drivername')),
                ('password', models.CharField(max_length=150, unique=True, verbose_name='password')),
            ],
        ),
    ]
