import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homepage/homefull/home';
import LoginPage from './components/loginpage/login';


function App() {
  return (
    <Router>
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<LoginPage />} /> 
    </Routes>
  </Router>
  );
}

export default App;