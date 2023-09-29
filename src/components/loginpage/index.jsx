import React from 'react';

function LoginPage() {
  return (
    <div className="login-form">
      <h2>Đăng nhập</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Tên người dùng:</label>
          <input type="text" id="username" placeholder="Nhập tên người dùng" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" placeholder="Nhập mật khẩu" required />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  )
}

export default LoginPage