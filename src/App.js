import "./App.css";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./components/homepage/home_full/home";
import LoginPage from "./components/loginpage/login";
import CoursePage from "./components/coursepage/coursepage";
import Student from "./components/studentpage/studentfull/student";
import StudentProfile from "./components/studentprofile/studentprofile";
import Teacher from "./components/teacherpage/teacherfull/teacherfull";
import ArrangeSchedule from "./components/teacherpage/arrange-schedule/arrange-schedule";
import FormSignIn from "./components/studentpage/form-sign-in/form-sign-in";
import CoursePageStudent from "./components/studentpage/course-page-student/course-page-student";
import TeacherSchedule from "./components/teacherpage/teacher-schedule/teacher-schedule";
import BookSchedule from "./components/studentpage/book-schedule/book-schedule";
import StudentSchedule from "./components/studentpage/student-schedule/student-schedule";
import Theory from "./components/studentpage/theory/theory";
import Admin from "./components/adminpage/admin-full/admin-full";
import UserManagement from "./components/adminpage/staff-management/staff-management";
import Staff from "./components/staffpage/staff-full/staff-full";
import SampleTest1 from "./components/studentpage/sample-test/sample-test1";
import QuestionDetail from "./components/staffpage/question-management/QuestionDetail/QuestionDetail";
import QuestionSampleDetail from "./components/staffpage/sample-test-management/QuestionSampleDetail/QuestionSampleDetail";

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
            path="/staff/question-sample-test-detail/:sampleId/question/:questionId"
            element={<QuestionSampleDetail />}
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
          <Route path="/sample-test1" element={<SampleTest1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
