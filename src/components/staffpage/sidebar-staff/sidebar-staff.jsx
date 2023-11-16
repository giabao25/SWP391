import React, { useState } from 'react';
// import './sidebar-admin.css';
import { FaTv } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import UserManagement from '../user-management/user-management';
import QuestionManagementComponent from '../question-management/QuestionManagementComponent';
import SampleTestComponent from '../sample-test-management/sample-test-management';

function SideBarStaff() {
    const [selectedComponent, setSelectedComponent] = useState('user');


    const handleNavigation = (componentName) => {
        setSelectedComponent(componentName);
    };

    return (
        <div>
            <div className="sidebar-admin">
                <h2>STAFF</h2>
                <ul className="sidebar-nav">
                    <li className={selectedComponent === 'user' ? 'active' : ''}>
                        <a onClick={() => handleNavigation('user')}>
                            <FaRegUser className='sidebar-icon' /> HỌC VIÊN
                        </a>
                    </li>
                    <li className={selectedComponent === 'questions' ? 'active' : ''}>
                        <a onClick={() => handleNavigation('questions')}>
                        <FaBook className='sidebar-icon'/> CÂU HỎI
                        </a>
                    </li>
                    <li className={selectedComponent === 'sampleTest' ? 'active' : ''}>
                        <a onClick={() => handleNavigation('sampleTest')}>
                        <FaBookReader className='sidebar-icon' /> ĐỀ THI
                        </a>
                    </li>
                </ul>
            </div>
            <div className="content">
                {selectedComponent === 'user' && <UserManagement />}
                {selectedComponent === 'questions' && <QuestionManagementComponent />}
                {selectedComponent === 'sampleTest' && <SampleTestComponent />}
            </div>
        </div>
    );
}

export default SideBarStaff;
