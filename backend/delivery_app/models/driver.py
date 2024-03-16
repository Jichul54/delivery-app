from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _

class DriverManager(BaseUserManager):
    def create_driver(self, password=None, **extra_fields):
        user = self.model(**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

class Driver(AbstractBaseUser, PermissionsMixin):
    drivername = models.CharField(_('drivername'), max_length=150, unique=True)
    role_id = models.IntegerField(_('role_id'),null=False)

    def __str__(self):
        return self.drivername
