import React, { useState, useEffect, useRef } from 'react';
import logo from "../../../assets/img/logobig.png";
import "./header.css";
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import useGetUserById from '../../../apis/user/useGetUserById';
function HeaderStudent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  const logout = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem('token');
    // Điều hướng người dùng về trang đăng nhập hoặc trang chính của bạn
    // Ví dụ:
    navigate('/');
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const userId = localStorage.getItem('userId')
  const { data } = useGetUserById(userId)
  return (
    <div>
      <div id="navbar" className="navbar">
        <img src={logo} alt="Logo" />


        <div className='icon' onClick={toggleSidebar}>
          <FaUserAlt />
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
        <div className='close' onClick={toggleSidebar}>
          <AiOutlineClose />
        </div>
        <div className='info'>
          <p>{data?.studentName || 'Chưa có tên'}</p> <br />
          <p>{userId}</p>
        </div>

        <ul>
          <li><Link to="/studentprofile">HỒ SƠ</Link></li>
          <li className='logout' onClick={logout}>
            <Link to="#"><FaSignOutAlt className='logout_icon' />ĐĂNG XUẤT</Link>
          </li>
        </ul>
      </div>

      <div className={`content ${isSidebarOpen ? 'blur' : ''}`}>
      </div>
    </div>
  );
}

export default HeaderStudent;
