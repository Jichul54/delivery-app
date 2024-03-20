# Delivery-App

このプロジェクトでは、React をフロントエンドに、Django をバックエンドに使用して、デリバリーアプリを作成します。以下の手順に従って開発環境を構築してください。

## 必要条件

- Python 3.8 以上
- Node.js 12 以上

## 環境構築

### バックエンド (Django)

1. **リポジトリのクローン**:

```shell
git clone https://github.com/Jichul54/delivery-app.git
```

2. **バックエンドディレクトリに移動**:

```shell
cd backend
```

3. **仮想環境の作成とアクティベーション**:

```shell
python3 -m venv venv
source venv/bin/activate
```

4. **必要な Python パッケージのインストール**:

```shell
pip install -r requirements.txt
```

5. **データベースのマイグレーション**:

```shell
python manage.py migrate
```

6. **開発サーバの起動**:

```shell
python manage.py runserver
```

### フロントエンド (React)

1. **フロントエンドディレクトリに移動**:

```shell
cd ../frontend
```

2. **Node.js パッケージのインストール**:

```shell
npm install
```

3. **開発中の React アプリの起動**:

```shell
npm start
```

4. **ビルド**:

```shell
npm run build
```

## Docker

### 前提条件

- Docker がインストールされていること
- Docker Compose がインストールされていること（docker-compose.yml を使用する場合）

### Docker Compose を使用したサービスの起動

Docker Compose を使用して、複数のコンテナを定義・実行する方法について説明します。

#### サービスのビルドと起動

プロジェクトのルートディレクトリに docker-compose.yml ファイルを作成し、以下のコマンドを実行してサービスをビルド・起動します。

```shell
docker-compose up -d
```

-d オプションは、サービスをデタッチドモード（バックグラウンド）で起動するために使用します。

#### サービスの停止とリソースの削除

以下のコマンドを実行して、起動したサービスを停止し、関連する Docker リソースを削除します。

```shell
docker-compose down
```

### Docker コンテナのログ確認

Docker コンテナのログを確認するには、以下のコマンドを使用します。コンテナの ID または名前を指定してください。

```shell
docker logs -f [コンテナIDまたは名前（例えば、delivery-app_backend_1）]
```

実行中のコンテナの ID または名前を確認するには、以下のコマンドを使用します。

```shell
docker ps
```
