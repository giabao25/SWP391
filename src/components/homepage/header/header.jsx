import React from 'react';
import "./header.css";
import logo from "../../../assets/img/logobig.png";
import background from "../../../assets/img/hinh3.jpg";
import { Link } from 'react-router-dom';
function Student_Header() {
  return (

    <div id='home'>
      <div id="navbar" className="navbar">
        <img src={logo} alt="Logo" />
        <ul>
          <li><a href="#home">TRANG CHỦ</a></li>
          <li><a href="#info">GIỚI THIỆU</a></li>
          <li><a href="#benefit">LỢI ÍCH</a></li>
          <li><a href="#b1">BẰNG B1</a></li>
          {/* <li><a href="#course">KHÓA HỌC LÁI XE</a></li> */}
          <li><a href="#footer">LIÊN HỆ</a></li>
        </ul>
        <Link to="/login" className="login-button">ĐĂNG NHẬP</Link>
      </div>

      <div className="header-image">
        <img src={background} alt="Hình ảnh" />
      </div>
    </div>

  );
}

export default Student_Header