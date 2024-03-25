import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => {navigate(`/users`)}}>
        ユーザーサインアップ
      </Button>
      <Button onClick={() => {navigate(`/deliver-items`)}}>
        配達画面
      </Button>
      <Button onClick={() => {navigate(`/login`)}}>
        ログイン
      </Button>
      <Button onClick={() => {navigate(`/register-items`)}}>
        登録画面
      </Button>
      <Button onClick={() => {navigate(`/test`)}}>
        テスト
      </Button>
    </div>
  );
};

export default Main;