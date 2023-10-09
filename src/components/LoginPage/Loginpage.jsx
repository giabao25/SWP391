import React from 'react'
import  { useState } from 'react'
import "./Loginpage.css"
function Loginpage() {
    const [activeTab, setActiveTab] = useState('login');

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
            <form>
              <div className="form-group">
                <label htmlFor="login-username">Tên người dùng:</label>
                <input type="text" id="login-username" placeholder="Nhập tên người dùng" required />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Mật khẩu:</label>
                <input type="password" id="login-password" placeholder="Nhập mật khẩu" required />
              </div>
              <button type="submit">Đăng nhập</button>
            </form>
          </>
        )}
        {activeTab === 'register' && (
          <>
            <h2>ĐĂNG KÝ</h2>
            <form>
              <div className="form-group">
                <label htmlFor="register-username">Tên người dùng:</label>
                <input type="text" id="register-username" placeholder="Nhập tên người dùng" required />
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
                <label htmlFor="register-email">Email:</label>
                <input type="email" id="register-email" placeholder="Nhập email" required />
              </div>
              <div className="form-group">
                <label htmlFor="register-phone">Số điện thoại:</label>
                <input type="text" id="register-phone" placeholder="Nhập số điện thoại" required />
              </div>
              <button type="submit">Đăng ký</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default Loginpage