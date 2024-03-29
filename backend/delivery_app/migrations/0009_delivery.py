# Generated by Django 5.0.3 on 2024-03-20 19:45

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('delivery_app', '0008_add_user_driver'),
    ]

    operations = [
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('delivery_route_no', models.IntegerField( verbose_name='delivery_route_no')),
                ('delivery_status', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='delivery_app.delivery_status')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='delivery_app.order')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
