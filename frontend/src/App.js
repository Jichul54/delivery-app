import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpForm from './pages/Signup/SignUpForm';
import LoginFormUser from './pages/Login/LoginFormUser';
import Test from './pages/Test/Test';
import LoginFormDriver from './pages/Login/LoginFormDriver';
import Main from './pages/Main';
import RegisterPackageInfo from './pages/Admin/Registering Packages/RegisterPackageInfo';
import CheckPackageInfo from './pages/Admin/Registering Packages/CheckPackageInfo';
import ConfirmPackageInfo from './pages/Admin/Registering Packages/ConfirmPackageInfo';
import Home from './pages/Home';
import CheckAdmin from './pages/Admin/CheckAdmin/CheckAdmin';
import DeliverItems from './pages/Drivers/DeliverItems/DeliverItems';
import LoginForm from './pages/Login/LoginForm';
import RegisterItems from './pages/Drivers/RegisterItems';
import ViewItems from './pages/Drivers/DeliverItems/ViewItems';
import HomeDriver from './pages/Drivers/HomeDriver';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Main />} />
        <Route path={`/users`} element={<SignUpForm />} />
        <Route path={`/login-vendors`} element={<LoginFormDriver />} />
        <Route path={`/login-users`} element={<LoginFormUser />} />
        <Route path={`/register-package-info`} element={<RegisterPackageInfo />} />
        <Route path={`/check-package-info`} element={<CheckPackageInfo />} />
        <Route path={`/confirm-package-info`} element={<ConfirmPackageInfo />} />
        <Route path={`/check-admin`} element={<CheckAdmin />} />
        <Route path={`/deliver-items`} element={<DeliverItems />}/>
        <Route path={`/home`} element={<Home />} />
        <Route path={`/test`} element={<Test />} />
        <Route path={`/login`} element={<LoginForm />} />
        <Route path={`/register-items`} element={<RegisterItems />} />
        <Route path={`/view-items`} element={<ViewItems />} />
        <Route path={`/home-driver`} element={<HomeDriver />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;