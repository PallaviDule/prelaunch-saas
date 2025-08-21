import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path='/dahsboard' element={<Dashboard/>}/>
        <Route path='profile' element={<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App
