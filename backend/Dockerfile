# Djangoアプリケーションのベースイメージ
FROM python:3.9

# 作業ディレクトリを設定
WORKDIR /app/backend

# パッケージをコピーしてインストール
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install django-cors-headers

# Gunicornをインストール
RUN pip install gunicorn

# SMTPサーバー（Postfix）のインストールと設定
RUN apt-get update && apt-get install -y postfix
# 必要に応じて、Postfixの設定を行う
# コンテナ内のポート25を開放
EXPOSE 587

# アプリケーションのコードをコピー
COPY . .

# マイグレーションの実行
RUN python manage.py makemigrations
RUN python manage.py migrate

# コンテナ内のポートを8080に設定
EXPOSE 8080

# GunicornなどのWSGIサーバーを起動
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "delivery_app.wsgi:application"]
