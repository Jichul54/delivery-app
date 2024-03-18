from django.db import models
from django.utils.translation import gettext_lazy as _
from .driver import Driver
from .delivery_status import Delivery_Status
from .order import Order

class Delivery(models.Model):
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    delivery_status = models.ForeignKey(Delivery_Status, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    delivery_route_no = models.CharField(_('delivery_route_no'), max_length=200)
    def __str__(self):
        return self.delivery_route_no