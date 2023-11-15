import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setEmail, setPassword } from '../../redux/userSlice/userSlice';

function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [role, setRole] = useState('hocvien'); // Mặc định chọn Học viên
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [apiResponse, setApiResponse] = useState(null); // Để lưu trữ phản hồi từ API
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const dispatch = useDispatch()
  const handleLogin = async (e) => {
    e.preventDefault();

    const requestBody = {
      userName: formData.email,
      password: formData.password,
    };

    try {
      // Thực hiện yêu cầu API tới máy chủ của bạn với thông tin đăng nhập của người dùng
      const response = await axios.post('https://drivingapi.azurewebsites.net/api/Users/login', requestBody);

      if (response.data && response.data.token) {
        // Lưu trữ token sau khi đăng nhập thành công
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.roleId);
        localStorage.setItem('userId', response.data.username);
        dispatch(setPassword(response.data.password))
        dispatch(setEmail(response.data.username))
        // dispatch(setEmail(response.data.email));
        // Cập nhật trạng thái với phản hồi từ API
        setApiResponse(response.data);

        const roleId = response.data.roleId;

        if (roleId === 'AD') {
          navigate('/admin');
        } else if (roleId === 'ST') {
          navigate('/student');
        } else if (roleId === 'SF') {
          navigate('/staff');
        }
      }
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
      if (error.response && error.response.status === 401) {
        alert('Email hoặc mật khẩu không đúng. Vui lòng thử lại.');
      } else {

        alert('Email hoặc mật khẩu không đúng. Vui lòng thử lại.');
      }
    }
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
        {/* <button
          className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
          onClick={() => handleTabChange('register')}
        >
          Đăng ký
        </button> */}
      </div>
      <div className="form-container">
        {activeTab === 'login' && (
          <>
            <h2>ĐĂNG NHẬP</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="login-username">Email:</label>
                <input
                  type="email"
                  name='email'
                  id="login-username"
                  placeholder="Nhập email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">Mật khẩu:</label>
                <input
                  type="password"
                  name='password'
                  id="login-password"
                  placeholder="Nhập mật khẩu"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <button type="submit">ĐĂNG NHẬP</button>

              {/* <Link to="/forget_pass_page" className="forget-link">Quên mật khẩu</Link> */}
            </form>
          </>
        )}
        {/* {activeTab === 'register' && (
          <>
            <h2>ĐĂNG KÝ</h2>
            <form action='register' method='POST'>
              <div className="form-group">
                <label htmlFor="register-username">Email:</label>
                <input
                  type="email"
                  id="register-username"
                  placeholder="Nhập email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-password">Mật khẩu:</label>
                <input
                  type="password"
                  id="register-password"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-confirm-password">Xác nhận mật khẩu:</label>
                <input
                  type="password"
                  id="register-confirm-password"
                  placeholder="Nhập lại mật khẩu"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-email">Địa chỉ:</label>
                <input
                  type="text"
                  id="register-email"
                  placeholder="Nhập địa chỉ"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-phone">Số điện thoại:</label>
                <input
                  type="text"
                  id="register-phone"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>

              <button type="submit">ĐĂNG KÝ</button>
            </form>
          </>
        )} */}
      </div>
    </div>
  );
}

export default LoginPage;
