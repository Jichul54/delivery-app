# Generated by Django 5.0.3 on 2024-03-26 13:05

from django.db import migrations

def add_order_data_3(apps, schema_editor):
    Order = apps.get_model('delivery_app','Order')
    
    order_2 = Order(
        user_id='4',
        merchandise_id = '2',
        merchandise_count = '2',
        delivery_date = '2024-3-30'
    )
    order_3 = Order(
        user_id='4',
        merchandise_id = '5',
        merchandise_count = '10',
        delivery_date = '2024-3-30'
    )
    order_4 = Order(
        user_id='4',
        merchandise_id = '4',
        merchandise_count = '3',
        delivery_date = '2024-3-31'
    )
    order_5 = Order(
        user_id='4',
        merchandise_id = '2',
        merchandise_count = '2',
        delivery_date = '2024-3-31'
    )
    order_6 = Order(
        user_id='4',
        merchandise_id = '5',
        merchandise_count = '2',
        delivery_date = '2024-3-31'
    )
    order_2.save()
    order_3.save()
    order_4.save()
    order_5.save()
    order_6.save()

class Migration(migrations.Migration):

    dependencies = [
        ('delivery_app', '0015_add_user_data'),
    ]

    operations = [
        migrations.RunPython(add_order_data_3),
    ]