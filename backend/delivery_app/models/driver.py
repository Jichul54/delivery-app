from django.db import models
from django.utils.translation import gettext_lazy as _
from .sales_office import Sales_office

class Driver(models.Model):
    drivername = models.CharField(_('drivername'), max_length=150, unique=True)
    sales_office = models.ForeignKey(Sales_office,on_delete=models.SET_NULL, null=True)
    role_id = models.IntegerField(_('role_id'),null=False)

    def __str__(self):
        return self.drivername