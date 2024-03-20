from django.db import models
from django.utils.translation import gettext_lazy as _
from .company import Company

class Sales_office(models.Model):
    sales_office_name = models.CharField(_('Sales_office_name'), max_length=150, unique=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    def __str__(self):
        return self.sales_office_name