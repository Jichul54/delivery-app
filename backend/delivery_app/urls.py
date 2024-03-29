from django.urls import path
from .views import TestAPIView, DriversView, UserView, CreateTokenView, UsersListView, OrderView, DeliveryView, NotificationView
from django.urls import path

urlpatterns = [
    path('api/test/', TestAPIView.as_view(), name='test-api'),
    path('drivers', DriversView.as_view(), name='drivers'),
    path('users', UsersListView.as_view(), name='users'),
    path('user', UserView.as_view(), name='user'),
    path('user/<int:pk>', UserView.as_view(), name='user get put delete'),
    path('token', CreateTokenView.as_view(), name='token_obtain_pair'),
    path('order', OrderView.as_view(), name='order'),
    path('order/<int:pk>', OrderView.as_view(), name='delete and put order'),
    path('delivery', DeliveryView.as_view(), name='delivery'),
    path('delivery/<int:pk>', DeliveryView.as_view(), name='delivery put'),
    path('users/notification', NotificationView.as_view(), name='notification'),
]
