import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpForm from './pages/Signup/SignUpForm';
import LoginFormUser from './pages/Login/LoginFormUser';
import Test from './pages/Test/Test';
import LoginFormDriver from './pages/Login/LoginFormDriver';
import Main from './pages/Main';
import HomeUser from './pages/Users/HomeUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Main />} />
        <Route path={`/users`} element={<SignUpForm />} />
        <Route path={`/login-vendors`} element={<LoginFormDriver />} />
        <Route path={`/login-users`} element={<LoginFormUser />} />
        <Route path={`/test`} element={<Test />} />
        <Route path={`/home-user`} element={<HomeUser />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;