import React from 'react'
import Footer from '../../homepage/footer/footer'
import HeaderTeacher from '../teacher-header/teacher-header'
import Benefit from '../../homepage/benefit/benefit'
import Info from '../../homepage/info/info'
import B1 from '../../homepage/b1/b1'


function Teacher() {
    return (
        <div>
            <HeaderTeacher />
            <Info />
            <B1 />
            <Footer />
        </div>

    )
}

export default Teacher