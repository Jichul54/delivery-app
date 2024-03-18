from django.db import models
from django.utils.translation import gettext_lazy as _

class Company(models.Model):
    company_name = models.CharField(_('company_name'), max_length=150, unique=True)
    def __str__(self):
        return self.company_name