import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginFormUser from './pages/Login/LoginFormUser';
import SignUpForm from './pages/Signup/SignUpForm';

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
