import React from 'react'
import { BrowserRouter as Router, Route, Routes, Form, } from 'react-router-dom';
import HeaderStudent from '../header/header';
import B1 from '../../homepage/b1/b1';
import Footer from '../../homepage/footer/footer';
import Info from '../../homepage/info/info';
import Benefit from '../../homepage/benefit/benefit';
import Course from '../../homepage/course/course';
import CourseStudent from '../course-student/course-student';
function Student() {
  return (
    <div>
      <HeaderStudent />
      <CourseStudent />
      <Footer />
    </div>
  )
}

export default Student