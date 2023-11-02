import React, { useState } from 'react';
import './sidebar-admin.css';
import UserManagement from '../staff-management/staff-management';
import Dashboard from '../dashboard/dashboard';
import { FaTv } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import StaffManagement from '../staff-management/staff-management';

function SideBarAdmin() {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');

  const handleNavigation = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div>
      <div className="sidebar-admin">
        <h2>Admin</h2>
        <ul className="sidebar-nav">
          <li>
            
            <a href="#" onClick={() => handleNavigation('dashboard')}>
            <FaTv className='sidebar-icon'/> Dashboard
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavigation('user')}>
              <FaRegUser className='sidebar-icon'/> Users
            </a>
          </li>
          {/* <li>
            <a href="#" onClick={() => handleNavigation('products')}>
              Products
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavigation('settings')}>
              Settings
            </a>
          </li> */}
        </ul>
      </div>
      <div className="content">
        {selectedComponent === 'dashboard' && <Dashboard />}
        {selectedComponent === 'user' && <StaffManagement />}
        {/* {selectedComponent === 'products' && <ProductsComponent />} */}
        {/* {selectedComponent === 'settings' && <SettingsComponent />} */}
      </div>
    </div>
  );
}

export default SideBarAdmin;
