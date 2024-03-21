from django.urls import path
from .views import TestAPIView, LoginVendorsView, DriversView, UserView, CreateTokenView, UsersListView
from django.urls import path

urlpatterns = [
    path('api/test/', TestAPIView.as_view(), name='test-api'),
    path('login-vendors', LoginVendorsView.as_view(), name='login-vendors'),
    path('drivers', DriversView.as_view(), name='drivers'),
    path('users', UsersListView.as_view(), name='users'),
    path('user', UserView.as_view(), name='user'),
    path('token', CreateTokenView.as_view(), name='token_obtain_pair'),
]
