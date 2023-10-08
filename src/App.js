import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homepage/home_full/home';
import LoginPage from './components/loginpage/login';
import CoursePage from './components/coursepage/coursepage';
import Student from './components/studentpage/studentfull/student';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Student />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/coursepage" element={<CoursePage />} />
      </Routes>
    </Router>
    
  );
}

export default App;