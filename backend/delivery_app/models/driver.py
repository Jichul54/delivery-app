from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _

class Driver(models.Model):
    drivername = models.CharField(_('drivername'), max_length=150, unique=True)
    # sales_office_id = models.IntegerField(_('salse_office_id'),null=False)
    role_id = models.IntegerField(_('role_id'),null=False)

    def __str__(self):
        return self.drivername


class Sales_office(models.Model):
    # company_id = models.IntegerField(_('company_id'),null=False)
    salse_office_name = models.CharField(_('salse_office_name'), max_length=150, unique=True)
    def __str__(self):
        return self.salse_office_name

class Company(models.Model):
    company_name = models.CharField(_('company_name'), max_length=150, unique=True)
    def __str__(self):
        return self.company_name