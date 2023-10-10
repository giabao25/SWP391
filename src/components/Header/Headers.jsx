import React from 'react'
import "./Headers.css"
// import { Link } from 'react-router-dom';
import logo from "../../images/anhlogo.png"
function Headers() {
  return (
    <div>
        <div id ="navbar"className="navbar">
            <img src={logo} alt='Logo'/>
            <ul>
              <li><a href="#home">TRANG CHỦ</a></li>
              <li><a href="#b1">BẰNG B1</a></li>
              <li><a href="#about">GIỚI THIỆU </a></li>
              <li><a href="#course">ĐĂNG KÍ HỌC</a></li>
              <li><a href="#cuoi">LIÊN HỆ</a></li>
            </ul> 
            {/* <Link to="/login" className="login-button">ĐĂNG NHẬP</Link>  */}
        </div>
       
    </div>
  )
}

export default Headers
