import './App.css';
import { BrowserRouter as Router, Route, Routes, Form, } from 'react-router-dom';
import Home from './components/homepage/home_full/home';
import LoginPage from './components/loginpage/login';
import CoursePage from './components/coursepage/coursepage';
import Student from './components/studentpage/studentfull/student';
import StudentProfile from './components/studentprofile/studentprofile';
import Teacher from './components/teacherpage/teacherfull/teacherfull';
import ArrangeSchedule from './components/teacherpage/arrange-schedule/arrange-schedule';
import FormSignIn from './components/studentpage/form-sign-in/form-sign-in';
import CoursePageStudent from './components/studentpage/course-page-student/course-page-student';
import TeacherSchedule from './components/teacherpage/teacher-schedule/teacher-schedule';
import BookSchedule from './components/studentpage/book-schedule/book-schedule';
import StudentSchedule from './components/studentpage/student-schedule/student-schedule';
import Theory from './components/studentpage/theory/theory';
import Admin from './components/adminpage/admin-full/admin-full';
import UserManagement from './components/adminpage/staff-management/staff-management';
import Staff from './components/staffpage/staff-full/staff-full';
import SampleTest1 from './components/studentpage/sample-test/sample-test1';

function App() {
  return (
    <div>
      <Router>
        <Routes scrollBehavior="auto">
          {/* <Route path="/" element={<Staff />} /> */}
          {/* <Route path="/" element={<Admin />} /> */}
          {/* <Route path="/" element={<Teacher />} /> */}
          <Route path="/" element={<Student />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/coursepage" element={<CoursePage />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/coursepage1" element={<CoursePageStudent />} />
          <Route path="/form" element={<FormSignIn />} />
          <Route path="/arrangeschedule" element={<ArrangeSchedule />} />
          <Route path="/teacherschedule" element={<TeacherSchedule />} />
          <Route path="/bookschedule" element={<BookSchedule />} />
          <Route path="/studentschedule" element={<StudentSchedule />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/sample-test1" element={<SampleTest1 />} />
          {/* <Route path="/admin/useradmin" element={<UserManagement />} /> */}
        </Routes>
      </Router>
    </div>


  );
}

export default App;