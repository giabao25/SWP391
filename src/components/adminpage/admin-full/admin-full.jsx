import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBarAdmin from '../sidebar-admin/sidebar-admin';
import NavbarAdmin from '../navbar-admin/navbar-admin';
import '../sidebar-admin/sidebar-admin.css';
import UserManagement from '../staff-management/staff-management';

function Admin() {
  return (
    <div>
      <SideBarAdmin />
      <NavbarAdmin />
    </div>

  );
}

export default Admin;
