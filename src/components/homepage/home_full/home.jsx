import React from 'react';
import Header from '../header/header';
import B1 from '../b1/b1';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Course from '../course/course';
function Home() {
  return (
    <div>
        <Header />
        <B1 />
        <Course />
        <Footer />
    </div>
  )
}

export default Home