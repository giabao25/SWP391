import React from 'react'
import HeaderStudent from '../header/header';
import B1 from '../../homepage/b1/b1';
import Course from '../../homepage/course/course';
import Footer from '../../homepage/footer/footer';
import Info from '../../homepage/info/info';
import Benefit from '../../homepage/benefit/benefit';
function Student() {
  return (
    <div>
        <HeaderStudent />
        <Course />
        <Info />
        <Benefit/>
        <B1 />
        <Footer />
    </div>
  )
}

export default Student