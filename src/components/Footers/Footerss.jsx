import "./footer.css"
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footerss() {
  return (
    <footer class="footer-distributed" id='cuoi'>

    <div class="footer-left">
        <h3>Trung Tâm Đào Tạo Lái Xe<span> ZYRO</span></h3>
        <p class="footer-company-name">Copyright ©<strong>Trung Tâm Đào Tạo Lái Xe ZYRO </strong> </p>
    </div>

    <div class="footer-center">
        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Quận Phú Nhuận</span>
                Hồ Chí Minh</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+91753675564</p>
        </div>
        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:sagar00001.co@gmail.com">trungtamzyro@gmail.com</a></p>
        </div>
    </div>
    <div class="footer-right">
        <p class="footer-company-about">
            <span>Thông Tin Về Trung Tâm</span>
            <strong>Trung Tâm ZYRO</strong> là trung tâm uy tín và chất lượng nhất
            hiện nay về thi bằng lái xe B1
        </p>
    </div>
</footer>

  )
}

export default Footerss