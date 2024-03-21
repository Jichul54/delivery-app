from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models.user import User
from .serializers import UserSerializer, UserListSerializer, OrderSerializer
from django.shortcuts import get_object_or_404
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models.order import Order

class TestAPIView(APIView):
    def get(self, request, format=None):
        data = {"message": "Hello from Django!"}
        return Response(data, status=status.HTTP_200_OK)

###########################
# ドライバー処理（Order）
###########################
class DriversView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        sales_office_id = request.GET.get('sales_office_id')
        if sales_office_id:
            return Response({"sales_office_id": sales_office_id},  status=status.HTTP_200_OK)
        else:
            return Response({"error": "sales_office_id not provided"}, status=status.HTTP_400_BAD_REQUEST)
###########################
# ユーザリスト取得処理（/users）
###########################
class UsersListView(APIView):
    def get(self, request, *args, **kwargs):
        users = User.objects.all()
        # serializer = UserSerializer(users, many=True)
        serializer = UserListSerializer(users, many=True)
        return Response(serializer.data)
###########################
# ユーザ単体処理（/user）
###########################
class UserView(APIView):
    def get(self, request):
        email = request.GET.get('email')
        user = get_object_or_404(User, email=email)
        serializer = UserListSerializer(user, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
###########################
# ログイン処理（/token）
###########################
class CreateTokenView(APIView):
    def post(self, request):
        email = request.data.get('email')

        try:
            # ユーザーを認証する
            # user = User.objects.get(username=username)
            user = User.objects.get(email=email)

            # トークンを生成する
            token = Token.objects.get_or_create(user=user)
            # トークンを返す
            return Response({"token": token.key, "role": "role-number", "id": user.id}, status=status.HTTP_200_OK)
        
        except User.DoesNotExist:
            # ユーザーが存在しない場合、エラーメッセージを返す
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

###########################
# 注文処理（/order）
###########################
class OrderView(APIView):
    def get(self, request):
        user_id = request.GET.get('user_id')
        # 全ての注文を取得
        orders = Order.objects.filter(user=user_id)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    def post(self, request):
        # 注文を作成
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        # 注文を更新
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        # 注文を削除
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)