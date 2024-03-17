# フロントエンド用のDockerfile

# ベースイメージの設定
FROM amazonlinux:2

# 必要なパッケージのインストール
RUN yum update -y && \
    yum install -y gcc-c++ make && \
    curl -sL https://rpm.nodesource.com/setup_14.x | bash - && \
    yum install -y nodejs && \
    npm install -g npm@7.24.1 && \
    yum clean all

# 作業ディレクトリの設定
WORKDIR /app/frontend

# ホストのpackage.jsonとpackage-lock.jsonをコンテナにコピーして依存関係をインストール
COPY package.json .
COPY package-lock.json .

# 必要なパッケージのインストール
RUN npm install --legacy-peer-deps

# フロントエンドのソースコードをコンテナにコピー
COPY . .

# デフォルトのポートを公開（必要に応じて変更）
EXPOSE 3000

# Reactサーバーの起動
CMD ["npm", "start"]
