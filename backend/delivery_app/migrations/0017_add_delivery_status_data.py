# Generated by Django 5.0.3 on 2024-03-27 10:24

from django.db import migrations

def add_delivery_status_data_2(apps, schema_editor):
    Delivery_status = apps.get_model('delivery_app','Delivery_status')
    delivery_status_2 = Delivery_status(
        derivery_status_name='未確定'
    )
    delivery_status_3 = Delivery_status(
        derivery_status_name='配達前'
    )
    delivery_status_4 = Delivery_status(
        derivery_status_name='配達完了'
    )
    delivery_status_5 = Delivery_status(
        derivery_status_name='キャンセル'
    )
    delivery_status_6 = Delivery_status(
        derivery_status_name='不在'
    )
    delivery_status_2.save()
    delivery_status_3.save()
    delivery_status_4.save()
    delivery_status_5.save()
    delivery_status_6.save()

class Migration(migrations.Migration):

    dependencies = [
        ('delivery_app', '0016_add_order'),
    ]

    operations = [
        migrations.RunPython(add_delivery_status_data_2),
    ]