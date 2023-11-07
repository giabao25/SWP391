import React, { useState } from 'react';
// import './sidebar-admin.css';
import { FaTv } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import UserManagement from '../user-management/user-management';
import QuestionManagementComponent from '../question-management/QuestionManagementComponent';

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
                        <a onClick={() => handleNavigation('user')}>
                            <FaRegUser className='sidebar-icon' /> HỌC VIÊN
                        </a>
                    </li>
                    <li>
                        <a onClick={() => handleNavigation('questions')}>
                            CÂU HỎI
                        </a>
                    </li>
                    <li>
                        <a onClick={() => handleNavigation('settings')}>
                            ĐỀ THI
                        </a>
                    </li>
                </ul>
            </div>
            <div className="content">
                {selectedComponent === 'user' && <UserManagement />}
                {selectedComponent === 'questions' && <QuestionManagementComponent />}
                {/* {selectedComponent === 'settings' && <SettingsComponent />} */}
            </div>
        </div>
    );
}

export default SideBarStaff;
