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
      <Button onClick={() => {navigate(`/test`)}}>
        テスト
      </Button>
      <Button onClick={() => {navigate(`/home-user`)}}>
        ユーザーホーム
      </Button>
    </div>
  );
};

export default Main;