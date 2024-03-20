from django.db import migrations
from django.utils import timezone
from django.db import migrations
from django.contrib.auth.models import User
from django.utils import timezone

def add_user_data(apps, schema_editor):
    User = apps.get_model('delivery_app', 'User')
    user = User(
        email='testuser@example.com',
        username='testuser',
        post_code='12345',
        address='Test Address',
        is_active=True,
        is_staff=False,
    )
    user.save()

class Migration(migrations.Migration):
    dependencies = [
        ('delivery_app', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(add_user_data),
    ]
