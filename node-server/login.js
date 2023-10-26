const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Sử dụng body-parser để xử lý yêu cầu POST
app.use(bodyParser.urlencoded({ extended: false }));

// Xử lý yêu cầu POST từ trang đăng nhập
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Thực hiện kiểm tra đăng nhập và gửi phản hồi tương ứng
  if (email === 'user@example.com' && password === 'password123') {
    res.send('Đăng nhập thành công');
  } else {
    res.send('Đăng nhập thất bại');
  }
});

// Xử lý yêu cầu POST từ trang đăng ký
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Thực hiện quá trình đăng ký và gửi phản hồi tương ứng
  // Lưu ý: Trong thực tế, bạn nên kiểm tra, xác thực và mã hóa mật khẩu một cách an toàn.
  res.send('Đăng ký thành công');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
