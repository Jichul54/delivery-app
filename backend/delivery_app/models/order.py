from django.db import models
from django.utils.translation import gettext_lazy as _
from .user import User
from .merchandise import Merchandise

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Merchandise = models.ForeignKey(Merchandise, on_delete=models.CASCADE)
    merchandise_count = models.IntegerField(_('merchandise_count'),null=False)
    delivery_date = models.DateField(_('delivery_date'),null=False)
    def __str__(self):
        return self.delivery_date