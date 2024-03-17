from django.db import models
from django.utils.translation import gettext_lazy as _
from .company import Company

class Merchandise(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    merchandise_name = models.CharField(_('merchandise_name'), max_length=150, unique=True)
    warehouse_address = models.CharField(_('warehouse_address'), max_length=150, unique=True)
    def __str__(self):
        return self.merchandise_name