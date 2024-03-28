import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpForm from './pages/Signup/SignUpForm';
import Test from './pages/Test/Test';
import DeliverItems from './pages/Drivers/DeliverItems/DeliverItems';
import LoginForm from './pages/Login/LoginForm';
import RegisterItems from './pages/Drivers/RegisterItems/RegisterItems';
import ViewItems from './pages/Drivers//ViewItems';
import HomeDriver from './pages/Drivers/HomeDriver';
import DeliveryCompleted from './pages/Drivers/DeliverItems/DeliveryCompleted';
import ConfirmItems from './pages/Drivers/RegisterItems/ConfirmItems';
import HomeUser from './pages/Users/HomeUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<LoginForm />} />                               {/* ログイン画面 */}
        <Route path={`/users`} element={<SignUpForm />} />                         {/* 新規会員登録画面 */}
        <Route path={`/deliver-items`} element={<DeliverItems />}/>                {/* 配達画面 */}
        <Route path={`/test`} element={<Test />} />                                {/* テスト */}
        <Route path={`/register-items`} element={<RegisterItems />} />             {/* 配達物登録画面 */}
        <Route path={`/view-items`} element={<ViewItems />} />                     {/* 配達物確認画面 */}
        <Route path={`/home-driver`} element={<HomeDriver />} />                   {/* ドライバーホーム画面 */}
        <Route path={`/delivery-completed`} element={<DeliveryCompleted />} />     {/* 配達完了画面 */}
        <Route path={`/confirm-items`} element={<ConfirmItems />} />               {/* 登録完了画面 */}
        <Route path={`/home-user`} element={<HomeUser />} />                       {/* ユーザー画面 */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;