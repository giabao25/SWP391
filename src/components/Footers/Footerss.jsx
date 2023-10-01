import "./footer.css"
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footerss() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Trung Tâm</h4>
                        <ul>

                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        
                        </ul>
                </div>

                <div className="footer-col">
                    <h4>Thông tin hữu ích</h4>
                        <ul>                      
                        <li><a href="#">Lịch học dự kiến</a></li>
                        <li><a href="#">Thông tin về học phí và cách thanh toán</a></li>
                        <li><a href="#">Quy định về việc hủy đăng ký và hoàn trả học phí</a></li>                       
                        </ul>
                </div>

                <div className="footer-col">
                    <h4>Liên hệ</h4>
                    <ul>
                        <li><a href="#">Địa chỉ:</a></li>
                        <li><a href="#">Điện thoại:</a></li>
                        <li><a href="#">Email:</a></li>                       
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>follow us</h4>
                    <ul>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className='fab fa-twitter'></i></a>
                            <a href="#"><i className='fab fa-instagram'></i></a>
                            <a href="#"><i className='fab fa-linkedin-in'></i></a>
                        </div>
                  
                    </ul>
                </div>

            </div>

        </div>

    </footer>
  )
}

export default Footerss