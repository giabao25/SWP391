import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import Home from "./components/homepage/home_full/home";
import LoginPage from "./components/loginpage/login";
import QuestionDetail from "./components/staffpage/question-management/QuestionDetail/QuestionDetail";
import Staff from "./components/staffpage/staff-full/staff-full";
import ResultPage from "./components/studentpage/result/ResultPage";
import SampleTest1 from "./components/studentpage/sample-test/sample-test1";
import Student from "./components/studentpage/studentfull/student";
import Theory from "./components/studentpage/theory/theory";
import StudentProfile from "./components/studentprofile/studentprofile";

function App() {
  return (
    <div>
      <Router>
        <Routes scrollBehavior="auto">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/staff" element={<PrivateRoute element={<Staff />} />} />
          <Route
            path="/staff/question-detail/:questionId"
            element={<QuestionDetail />}
          />
          <Route
            path="/student"
            element={<PrivateRoute element={<Student />} />}
          />
          <Route
            path="/studentprofile"
            element={<PrivateRoute element={<StudentProfile />} />}
          />
          <Route
            path="/theory"
            element={<PrivateRoute element={<Theory />} />}
          />
          <Route path="/sample-test1/:sampleTestId" element={<SampleTest1 />} />
          <Route path="/result/sample_test" element={<ResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
