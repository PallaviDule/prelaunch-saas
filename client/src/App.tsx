import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/register' element={<OnboardingPage />}/>
        <Route path='/dahsboard' element={<Dashboard/>}/>
        <Route path='profile' element={<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App
