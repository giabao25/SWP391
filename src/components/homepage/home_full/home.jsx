import React from 'react';
import Header from '../header/header';
import B1 from '../b1/b1';
import { Link } from 'react-router-dom';
import Course from '../course/course';
import Footer from '../footer/footer';
import Benefit from '../benefit/benefit';
import Info from '../info/info';
function Home() {
  return (
    <div>
        <Header />
        <Info />
        <Benefit />
        <B1 />
        <Course />
        <Footer />
    </div>
  )
}

export default Home