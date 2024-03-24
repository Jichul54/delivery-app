from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import User, Order, Delivery
from .serializers import UserSerializer, UserListSerializer, OrderSerializer, DeliverySerializer, DriverSerializer, OfficeSerializer
from django.shortcuts import get_object_or_404
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q

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
        role_id = request.GET.get('role_id')
        post_code = request.GET.get('post_code')
        address = request.GET.get('address')

        # role_idを必須にする
        if role_id is None:
            return Response({"error": "role_id not provided"}, status=status.HTTP_400_BAD_REQUEST)

        # addressもしくはpost_codeがあればフィルターをかける
        if post_code is None and address is None:
            users = User.objects.filter(role_id=role_id)
        elif post_code is None:
            users = User.objects.filter(address=address, role_id=role_id)
        elif address is None:
            users = User.objects.filter(post_code=post_code, role_id=role_id)
        else:
            users = User.objects.filter(post_code=post_code, address=address, role_id=role_id)

        # Serializeする
        if role_id == 1:
            serializer = UserSerializer(users, many=True)
        elif role_id == 2:
            serializer = OfficeSerializer(users, many=True)
        else:
            serializer = DriverSerializer(users, many=True)

        return Response(serializer.data)
###########################
# ユーザ単体処理（/user）
###########################
class UserView(APIView):
    def get(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        if user.role_id == 1:
            serializer = UserSerializer(user, many=False)
        elif user.role_id == 2:
            serializer = OfficeSerializer(user, many=False)
        else:
            serializer = DriverSerializer(user, many=False)
        
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
            token, created = Token.objects.get_or_create(user=user)
            # トークンを返す
            return Response({"token": token.key, "role": user.role_id, "id": user.id}, status=status.HTTP_200_OK)
        
        except User.DoesNotExist:
            # ユーザーが存在しない場合、エラーメッセージを返す
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

###########################
# 注文処理（/order）
###########################
class OrderView(APIView):
    def get(self, request):

        orders = Order.objects.all()

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

###########################
# 配達処理（/delivery）
###########################
class DeliveryView(APIView):
    def get(self, request):
        delivery_date = request.GET.get('delivery_date')
        user_id = request.GET.get('user_id')
        
        if delivery_date is None:
           deliveries = Delivery.objects.filter(user=user_id)
        elif user_id is None:
            deliveries = Delivery.objects.filter(order__delivery_date=delivery_date)
        elif delivery_date is None and user_id is None:
            deliveries = Delivery.objects.all()
        else:
            deliveries = Delivery.objects.filter(order__delivery_date=delivery_date, user=user_id)
        
        # 配達情報をシリアライズしてレスポンス
        serializer = DeliverySerializer(deliveries, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        # 配達情報を作成
        post_data = {
            'delivery_route_no': 1,
            'delivery_status': 1,
            **request.data  # 既存のデータも含める
        }
        serializer = DeliverySerializer(data=post_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

