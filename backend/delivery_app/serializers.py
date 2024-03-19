from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'post_code', 'address', 'is_active', 'is_staff']

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # カスタムのトークンペイロードに追加の情報を含めることができます
        token['username'] = user.username

        return token

    def validate(self, attrs):
        data = super().validate(attrs)

        # レスポンスに追加の情報を含めることができます
        data['username'] = self.user.username

        return data