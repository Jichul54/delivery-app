import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpForm from './pages/Signup/SignUpForm';
import LoginFormUser from './pages/Login/LoginFormUser';
import Test from './pages/Test/Test';
import LoginFormDriver from './pages/Login/LoginFormDriver';
import Main from './pages/Main';
import RegisterPackageInfo from './pages/Registering Packages/RegisterPackageInfo';
import CheckPackageInfo from './pages/Registering Packages/CheckPackageInfo';
import ConfirmPackageInfo from './pages/Registering Packages/ConfirmPackageInfo';

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
        <Route path={`/test`} element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;