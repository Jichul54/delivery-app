import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => {navigate(`/login-vendors`)}}>
        業者ログイン
      </Button>
      <Button onClick={() => {navigate(`/login-users`)}}>
        ユーザーログイン
      </Button>
      <Button onClick={() => {navigate(`/users`)}}>
        ユーザーサインアップ
      </Button>
      <Button onClick={() => {navigate(`/register-package-info`)}}>
        荷物登録画面
      </Button>
      <Button onClick={() => {navigate(`/check-admin`)}}>
        管理者確認画面
      </Button>
      <Button onClick={() => {navigate(`deliver-items`)}}>
        配達画面
      </Button>
      <Button onClick={() => {navigate(`/test`)}}>
        テスト
      </Button>
    </div>
  );
};

export default Main;