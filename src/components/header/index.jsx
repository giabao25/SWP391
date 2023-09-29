import React from 'react'
import "./style.css";

function Header() {
  return (
    <div>
        <div className="navbar">
            <img src="./img/logobig.png" alt="Logo" />
        <ul>
            <li><a href="#">TRANG CHỦ</a></li>
            <li><a href="#b1">BẰNG B1</a></li>
            <li><a href="#">KHÓA HỌC LÁI XE</a></li>
            <li><a href="#">ĐĂNG KÍ HỌC</a></li>
            <li><a href="#">LIÊN HỆ</a></li>
        </ul>
        <a href="#" className="login-button">Đăng nhập</a>
        </div>

        <div className="header-image">
            <img src="./img/hinh2.jpg" alt="Hình ảnh" />
        </div>
    </div>
    
  )
}

export default Header