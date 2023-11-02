import React, { useState } from 'react';
// import './sidebar-admin.css';
import { FaTv } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import UserManagement from '../user-management/user-management';

function SideBarStaff() {
    const [selectedComponent, setSelectedComponent] = useState('user');

    const handleNavigation = (componentName) => {
        setSelectedComponent(componentName);
    };

    return (
        <div>
            <div className="sidebar-admin">
                <h2>Staff</h2>
                <ul className="sidebar-nav">
                    <li>
                        <a href="#" onClick={() => handleNavigation('user')}>
                            <FaRegUser className='sidebar-icon' /> Users
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleNavigation('products')}>
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleNavigation('settings')}>
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
            <div className="content">
                {selectedComponent === 'user' && <UserManagement />}
                {/* {selectedComponent === 'products' && <ProductsComponent />} */}
                {/* {selectedComponent === 'settings' && <SettingsComponent />} */}
            </div>
        </div>
    );
}

export default SideBarStaff;
