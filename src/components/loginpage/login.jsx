import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import axios from 'axios';

function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [role, setRole] = useState('hocvien');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  
  

  return (
    <div className="login-page">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => handleTabChange('login')}
        >
          Đăng nhập
        </button>
        <button
          className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
          onClick={() => handleTabChange('register')}
        >
          Đăng ký
        </button>
      </div>
      <div className="form-container">
        {activeTab === 'login' && (
          <>
            <h2>ĐĂNG NHẬP</h2>
            <form action='login' method='POST'>
              <div className="form-group">
                <label htmlFor="login-username">Email:</label>
                <input type="email" name='email' id="login-username" placeholder="Nhập email" required />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">Mật khẩu:</label>
                <input type="password" name='password' id="login-password" placeholder="Nhập mật khẩu" required />
              </div>
              
              <button type="submit">Đăng nhập</button>

              <Link to="/forget_pass_page" className="forget-link">Quên mật khẩu</Link>

            </form>
          </>
        )}
        {activeTab === 'register' && (
          <>
            <h2>ĐĂNG KÝ</h2>
            <form action='register' method='POST'>
              <div className="form-group">
                <label htmlFor="register-username">Email:</label>
                <input type="email" id="register-username" placeholder="Nhập email" required />
              </div>

              <div className="form-group">
                <label htmlFor="register-password">Mật khẩu:</label>
                <input type="password" id="register-password" placeholder="Nhập mật khẩu" required />
              </div>

              <div className="form-group">
                <label htmlFor="register-confirm-password">Xác nhận mật khẩu:</label>
                <input type="password" id="register-confirm-password" placeholder="Nhập lại mật khẩu" required />
              </div>

              <div className="form-group">
                <label htmlFor="register-email">Địa chỉ:</label>
                <input type="text" id="register-email" placeholder="Nhập địa chỉ" required />
              </div>

              <div className="form-group">
                <label htmlFor="register-phone">Số điện thoại:</label>
                <input type="text" id="register-phone" placeholder="Nhập số điện thoại" required />
              </div>

              <div className="form-group">
                <label htmlFor="register-role">Vai trò:</label>
                <select
                  id="register-role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="hocvien">Học viên</option>
                  <option value="giaovien">Giảng viên</option>
                </select>
              </div>

              <button type="submit">Đăng ký</button>


            </form>
          </>
        )}

      </div>
    </div>
  );
}

export default LoginPage;