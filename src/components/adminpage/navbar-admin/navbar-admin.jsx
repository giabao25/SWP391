import React from 'react';
import '../sidebar-admin/sidebar-admin.css';
import './navbar-admin.css';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

function NavbarAdmin() {
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
                        <span>User Name</span>
                    </div>
                    <div className="logout">
                        <button>ĐĂNG XUẤT</button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default NavbarAdmin;
