# Djangoアプリケーションのベースイメージ
FROM python:3.9

# 作業ディレクトリを設定
WORKDIR /app/backend

# パッケージをコピーしてインストール
COPY requirements.txt .
RUN pip install -r requirements.txt

# Gunicornをインストール
RUN pip install gunicorn

# アプリケーションのコードをコピー
COPY . .

# コンテナ内のポートを8080に設定
EXPOSE 8080

# GunicornなどのWSGIサーバーを起動
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "delivery_app.wsgi:application"]
