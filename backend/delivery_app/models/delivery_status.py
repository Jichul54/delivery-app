from django.db import models
from django.utils.translation import gettext_lazy as _

class Delivery_Status(models.Model):
    derivery_status_name = models.CharField(_('derivery_status_name'), max_length=150, unique=True)
    def __str__(self):
        return self.derivery_status_name