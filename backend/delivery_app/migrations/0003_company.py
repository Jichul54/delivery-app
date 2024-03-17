# Generated by Django 5.0.3 on 2024-03-17 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('delivery_app', '0002_add_initial_users'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=150, unique=True, verbose_name='company_name')),
            ],
        ),
    ]
