import React, { useState, useEffect, useRef } from 'react';
import logo from "../../../assets/img/logobig.png";
import "./teacher-header.css";
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";

function HeaderTeacher() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div id="navbar" className="navbar">
                <img src={logo} alt="Logo" />
                {/* <ul>
                    <li><a href="#info">GIỚI THIỆU</a></li>
                    <li><a href="#b1">BẰNG B1</a></li>
                    <li><a href="#footer">LIÊN HỆ</a></li>
                </ul> */}

                <div className='icon' onClick={toggleSidebar}>
                    <FaUserAlt />
                </div>
            </div>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
                <div className='close' onClick={toggleSidebar}>
                    <AiOutlineClose />
                </div>
                <div className='info'>
                    <p>Lê Nguyễn Gia Bảo</p> <br />
                    <p>baolngse171071@fpt.edu.vn</p>
                </div>

                <ul>
                    <li><Link to="/studentprofile">HỒ SƠ</Link></li>
                    <li><Link to="/arrangeschedule">XẾP LỊCH</Link></li>
                    <li><Link to="teacherschedule">LỊCH DẠY</Link></li>
                    <li className='logout'><Link to="#"><FaSignOutAlt className='logout_icon' />ĐĂNG XUẤT</Link></li>
                </ul>
            </div>

            <div className={`content ${isSidebarOpen ? 'blur' : ''}`}>
            </div>
        </div>
    );
}

export default HeaderTeacher;
