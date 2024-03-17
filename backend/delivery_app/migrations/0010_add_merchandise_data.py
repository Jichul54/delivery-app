# Generated by Django 5.0.3 on 2024-03-17 10:58

from django.db import migrations

def add_merchandise_data(apps, schema_editor):
    Merchandise = apps.get_model('delivery_app','Merchandise')
    sales_office = Merchandise(
        company_id='1',
        merchandise_name = 'onigiri',
        warehouse_address = 'test'
    )
    sales_office.save()

class Migration(migrations.Migration):

    dependencies = [
        ('delivery_app', '0009_merchandise'),
    ]

    operations = [
        migrations.RunPython(add_merchandise_data)
    ]

