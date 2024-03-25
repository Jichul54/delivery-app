# Generated by Django 5.0.3 on 2024-03-17 08:29

from django.db import migrations

def add_delivery_status_data(apps, schema_editor):
    Delivery_status = apps.get_model('delivery_app','Delivery_status')
    delivery_status = Delivery_status(
        derivery_status_name='test1'
    )
    delivery_status.save()

class Migration(migrations.Migration):

    dependencies = [
        ('delivery_app', '0007_add_driver_data'),
    ]

    operations = [
        migrations.RunPython(add_delivery_status_data),
    ]