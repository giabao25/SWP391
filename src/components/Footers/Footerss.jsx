import "./footer.css"
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footerss() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                        <ul>

                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Affiliate program</a></li>

                    </ul>
                </div>

                <div className="footer-col">
                    <h4>get help</h4>
                        <ul>

                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>

                        </ul>
                </div>

                <div className="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
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