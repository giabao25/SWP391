import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ element }) {
  const isAuthenticated = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Kiểm tra vai trò của người dùng và quyết định xem họ có quyền truy cập trang không
  if (userRole === 'ST') {
    if (['/student', '/studentprofile', '/theory', '/sample-test1'].includes(window.location.pathname)) {
      return element;
    } else {
      return <Navigate to="/student" />;
    }
  } else if (userRole === 'SF') {
    if (window.location.pathname === '/staff') {
      return element;
    } else {
      return <Navigate to="/staff" />;
    }
  }

  // Trường hợp khác, điều hướng người dùng đến trang chính hoặc trang lỗi
  return <Navigate to="/" />;
}

export default PrivateRoute;
