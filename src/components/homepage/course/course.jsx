import React from 'react';
import { Link } from 'react-router-dom';
import "./course.css";
function Course() {
  return (
    <div id='course' className="course-section">
      <h1>KHÓA HỌC</h1>
      <div className="course">
        <div className="courses-container">
          <div className="course-header">
            <h2>
              17.100.000đ 
            </h2>
            <span className="course">/ KHÓA HỌC</span>
          </div>

          <div className="course-box">
            <h3>Khóa học lái xe hạng B1</h3>
            <p>Số tự động</p>
          </div>

          <div className="course-content">
            <ul>
              <li>
                Thời gian học:
                <span>3,5 tháng</span>
              </li>
              <li>
                Xe học:
                <span>Vios 2021, Hyundai i10</span>
              </li>
              <li>
                Lịch học:
                <span>Tự chọn từ T2 đến CN</span>
              </li>
              <li>
                Lý thuyết:
                <span>Có tài liệu học tập và thi thử trên web</span>
              </li>
            </ul>
          </div>

          <div className="course-button">
            <Link to="/coursepage">XEM CHI TIẾT</Link>
          </div>
        </div>

        <div className="course-right">

          <div className="right-content">
            <p>Được học và thi đúng theo tiến độ quy định</p>
          </div>

          <div className="right-content">
            <p>Chủ động học theo lịch rảnh, khung giờ học từ 7h đến 18h</p>
          </div>

          <div className="right-content">
            <p>Cam kết đầu ra, miễn phí thi lại, miễn phí dợt xe lại</p>
          </div>

          <div className="right-content">
            <p>Miễn phí bảo lưu hồ sơ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
