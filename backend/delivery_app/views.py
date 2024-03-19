from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from .models.user import User
from .serializers import UserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny

class TestAPIView(APIView):
    def get(self, request, format=None):
        data = {"message": "Hello from Django!"}
        return Response(data, status=status.HTTP_200_OK)

class LoginVendorsView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        return Response({"username": username, "passoword": password}, status=status.HTTP_200_OK)

        # # ユーザーの認証を試みる
        # user = authenticate(username=username, password=password)

        # if user is not None:
        #     # ユーザーが認証された場合、トークンを生成する
        #     token, created = Token.objects.get_or_create(user=user)

        #     # トークンを返す
        #     return Response({"token": token.key}, status=status.HTTP_200_OK)
        # else:
        #     # ユーザーが認証されなかった場合はエラーを返す
        #     return Response({"message": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)

class DriversView(APIView):
    def get(self, request):
        sales_office_id = request.GET.get('sales_office_id')
        if sales_office_id:
            return Response({"sales_office_id": sales_office_id},  status=status.HTTP_200_OK)
        else:
            return Response({"error": "sales_office_id not provided"}, status=status.HTTP_400_BAD_REQUEST)

class UsersView(APIView):
    # permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = [AllowAny]  # 認証は必要ありません
