import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpForm from './pages/Signup/SignUpForm';
import LoginFormUser from './pages/Login/LoginFormUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<LoginFormUser />} />
        <Route path={`/CreateAccount`} element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
