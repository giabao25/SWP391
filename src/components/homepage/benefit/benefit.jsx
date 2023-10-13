import React from 'react'
import "./benefit.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
function Benefit() {
    return (
        <section className="benefit" id='benefit'>
            <div className='benefit-head'>
                <h1>KHÓA HỌC LÁI XE CỦA CHÚNG TÔI</h1>
                <p>Khám phá những lợi ích của việc tham gia khóa học lý thuyết lái xe của chúng tôi để chuẩn bị cho kỳ thi lấy bằng lái.</p>
            </div>

            <div className="row">
                <div className="benefit-col">
                    <h3><i className="fas fa-graduation-cap"> </i>Học Tập Toàn Diện</h3>
                    <p>Tiếp cận kiến thức lý thuyết sâu rộng để chuẩn bị cho kỳ thi lấy bằng lái xe của bạn.</p>
                </div>

                <div className="benefit-col">
                    <h3><i class="fa-solid fa-chalkboard-user"></i>Giảng Viên Kinh Nghiệm</h3>
                    <p>Học từ các giảng viên có kinh nghiệm sẽ hướng dẫn bạn qua các kiến thức lý thuyết và quy tắc giao thông.</p>
                </div>

                <div className="benefit-col">
                    <h3><i class="fa-solid fa-business-time"></i>Thời Gian Học Linh Hoạt</h3>
                    <p>Thỏa thích lựa chọn thời gian học linh hoạt phù hợp với lịch trình và tốc độ học của bạn.</p>
                </div>
            </div>
        </section>
    )
}

export default Benefit