import React from 'react';
import '../sidebar-admin/sidebar-admin.css';
import './navbar-admin.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

function NavbarAdmin() {
    const navigate = useNavigate();
    const logout = () => {
        // Xóa token khỏi localStorage
        localStorage.removeItem('token');
        // Điều hướng người dùng về trang đăng nhập hoặc trang chính của bạn
        // Ví dụ:
        navigate('/');
    };
    return (
        <div>
            <div className="navbar-admin">
                <div className="navbar-content">
                    <div className="search-box">
                        <div className="search-input">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>

                    <div className="user-info">
                        <FaUser className="user-icon" />
                        <span>Staff</span>
                    </div>
                    <div className="logout" onClick={logout}>
                        <button>ĐĂNG XUẤT</button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default NavbarAdmin;
