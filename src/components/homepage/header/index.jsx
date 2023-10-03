import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
function Header() {
  return (
    
    <div>
        <div id ="navbar"className="navbar">
            <img src="https://drive.google.com/file/d/1OOQAf86ydm0b3-PHoEc7ptt5fmhVhil2/view?usp=sharing" alt="Logo" />
        <ul>
            <li><a href="#">TRANG CHỦ</a></li>
            <li><a href="#">GIỚI THIỆU</a></li>
            <li><a href="#b1">BẰNG B1</a></li>
            <li><a href="#">KHÓA HỌC LÁI XE</a></li>
            <li><a href="#">LIÊN HỆ</a></li>
        </ul>
        <Link to="/login" className="login-button">ĐĂNG NHẬP</Link>
        </div>

        <div className="header-image">
            <img src="https://truonghoclaixeb2.com/img/baiviet/icon/1.jpg" alt="Hình ảnh" />
        </div>
    </div>
    
  );
}

export default Header