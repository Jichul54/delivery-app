# Generated by Django 5.0.3 on 2024-03-20 18:01

from django.db import migrations

def add_sales_office_data(apps, schema_editor):
    Sales_office = apps.get_model('delivery_app','Sales_office')
    sales_office = Sales_office(
        sales_office_name = 'Hokkaid-',
        company_id='1'
    )
    sales_office.save()

class Migration(migrations.Migration):

    dependencies = [
        ('delivery_app', '0003_add_company_data'),
    ]

    operations = [
        migrations.RunPython(add_sales_office_data),
    ]
