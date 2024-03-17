from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

class TestAPIView(APIView):
    def get(self, request, format=None):
        data = {"message": "Hello from Django!"}
        return Response(data, status=status.HTTP_200_OK)

class LoginVendorsView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # ユーザーの認証を試みる
        user = authenticate(username=username, password=password)

        if user is not None:
            # ユーザーが認証された場合、トークンを生成する
            token, created = Token.objects.get_or_create(user=user)

            # トークンを返す
            return Response({"token": token.key}, status=status.HTTP_200_OK)
        else:
            # ユーザーが認証されなかった場合はエラーを返す
            return Response({"message": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)

class DriversView(APIView):
    def get(self, request):
        sales_office_id = request.GET.get('sales_office_id')
        if sales_office_id:
            return Response({"sales_office_id": sales_office_id},  status=status.HTTP_200_OK)
        else:
            return Response({"error": "sales_office_id not provided"}, status=status.HTTP_400_BAD_REQUEST)





