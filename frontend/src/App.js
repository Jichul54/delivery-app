import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpForm from './pages/Signup/SignUpForm';
import LoginFormUser from './pages/Login/LoginFormUser';
import Test from './pages/Test/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/test`} element={<Test />} />
        <Route path={`/`} element={<LoginFormUser />} />
        <Route path={`/createAccount`} element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;