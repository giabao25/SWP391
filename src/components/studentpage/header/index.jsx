import React from 'react'

function Header_Student() {
  return (
    <div>
        <div>
        <div id ="navbar"className="navbar">
            <img src="../../img/logobig.png" alt="Logo" />
        <ul>
            <li><a href="#">HỒ SƠ</a></li>
            <li><a href="#">ĐẶT LỊCH</a></li>
            <li><a href="#">LỊCH HỌC</a></li>
            <li><a href="#">LÝ THUYẾT</a></li>
            <li><a href="#">KHÓA HỌC CỦA TÔI</a></li>
        </ul>
        <Link to="/login" className="login-button">Đăng nhập/Đăng ký</Link>
        </div>

        <div className="header-image">
            <img src="https://truonghoclaixeb2.com/img/baiviet/icon/1.jpg" alt="Hình ảnh" />
        </div>
    </div>
    </div>
  )
}

export default Header_Student