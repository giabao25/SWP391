import React from 'react'
import "./info.css"
function Info() {
    return (
        <div className="info-contain" id='info'>
            <div className='info-content'>
                <h1>TRUNG TÂM ĐÀO TẠO LÁI XE ZYRO</h1>
                <p>Khám phá thế giới qua tầm lái của bạn</p>
            </div>

            <section id="info-container">
                <div className="info-img">
                    <img src="https://daylaixehanoi.vn/wp-content/uploads/2020/05/hoc-bang-lai-b1-de-hon-b2.png" alt="Mô tả ảnh" />
                </div>

                <div className="info-text">
                    <h2>Chào mừng bạn đến với Trung tâm đào tạo lái xe Zyro</h2>
                    <p>Chúng tôi cam kết đem lại cho bạn trải nghiệm đào tạo lái xe an toàn và chất lượng. Tại Trung tâm Zyro, bạn sẽ tìm thấy các khóa học đa dạng để nâng cao kỹ năng lái xe của mình.</p>

                    <p>Chúng tôi chuyên đào tạo lái xe các hạng B1, B2, C cùng nhiều lựa chọn hấp dẫn khác. Với đội ngũ giảng viên giàu kinh nghiệm và các phương tiện hiện đại, chúng tôi cam kết giúp bạn trở thành một tài xế tự tin và an toàn trên đường.</p>
                    <div className="info-fe">
                        <img src="https://cdn-icons-png.flaticon.com/512/2972/2972117.png" alt="" />
                        <div className="fe-text">
                            <h5>Học lái xe tiện lợi</h5>
                            <p>Tại Trung tâm Zyro, bạn có thể bắt đầu và hoàn thành các khóa học phổ biến trong thời gian ngắn. Chúng tôi linh hoạt trong việc xếp lịch học để phù hợp với bạn.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info