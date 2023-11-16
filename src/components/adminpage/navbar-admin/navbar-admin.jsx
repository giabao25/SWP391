import React from 'react';
import { FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../sidebar-admin/sidebar-admin.css';
import './navbar-admin.css';

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
