from django.urls import path
from .views import TestAPIView, LoginVendorsView, DriversView, UsersView
from django.urls import path
from .views import CustomTokenObtainPairView

urlpatterns = [
    path('api/test/', TestAPIView.as_view(), name='test-api'),
    path('login-vendors', LoginVendorsView.as_view(), name='login-vendors'),
    path('drivers', DriversView.as_view(), name='drivers'),
    path('users', UsersView.as_view(), name='users'),
    path('token', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
