import React from 'react'
import "./Headers.css"
// import { Link } from 'react-router-dom';
function Headers() {
  return (
    <div>
        <div id ="navbar"className="navbar">
            <img src="https://hoclaixechuyennghiep.net/wp-content/uploads/2022/01/Logo_Lai-xe-chuyen-nghiep-02.png" alt='Logo'/>
            <ul>
              <li><a href="#navbar">TRANG CHỦ</a></li>
              <li><a href="#b1">BẰNG B1</a></li>
              <li><a href="#course">KHÓA HỌC LÁI XE</a></li>
              <li><a href="#course">ĐĂNG KÍ HỌC</a></li>
              <li><a href="#cuoi">LIÊN HỆ</a></li>
            </ul> 
            {/* <Link to="/login" className="login-button">ĐĂNG NHẬP</Link>  */}
        </div>
       
    </div>
  )
}

export default Headers
