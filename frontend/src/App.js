import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpForm from './pages/Signup/SignUpForm';
import LoginFormUser from './pages/Login/LoginFormUser';
import Test from './pages/Test/Test';
import LoginFormDriver from './pages/Login/LoginFormDriver';
import Main from './pages/Main';
import DeliverItems from './pages/Drivers/DeliverItems/DeliverItems';
import LoginForm from './pages/Login/LoginForm';
import RegisterItems from './pages/Drivers/RegisterItems/RegisterItems';
import ViewItems from './pages/Drivers//ViewItems';
import HomeDriver from './pages/Drivers/HomeDriver';
import StartDelivering from './pages/Drivers/DeliverItems/StartDelivering';
import DeliveryCompleted from './pages/Drivers/DeliverItems/DeliveryCompleted';
import ConfirmItems from './pages/Drivers/RegisterItems/ConfirmItems';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Main />} />
        <Route path={`/users`} element={<SignUpForm />} />
        <Route path={`/login-vendors`} element={<LoginFormDriver />} />
        <Route path={`/login-users`} element={<LoginFormUser />} />
        <Route path={`/deliver-items`} element={<DeliverItems />}/>
        <Route path={`/test`} element={<Test />} />
        <Route path={`/login`} element={<LoginForm />} />
        <Route path={`/register-items`} element={<RegisterItems />} />
        <Route path={`/view-items`} element={<ViewItems />} />
        <Route path={`/home-driver`} element={<HomeDriver />} />
        <Route path={`/start-delivering`} element={<StartDelivering />} />
        <Route path={`/delivery-completed`} element={<DeliveryCompleted />} />
        <Route path={`/confirm-items`} element={<ConfirmItems />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;