import React, { useEffect } from 'react'
// import './coursepage.css'
import { Link } from 'react-router-dom'
// import Footer from '../homepage/footer/footer'
import { FaArrowLeft } from "react-icons/fa";

function CoursePageStudent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="register" id='coursepage' >
      <Link to="/" className="back-to-home"><FaArrowLeft /> </Link>
      <h1 className="title">Thông Tin Khóa Học</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Khóa học</th>
              <th>Số lượng</th>
              <th>Nội dung đào tạo</th>
              <th>Thời gian</th>
              <th>Đăng kí</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BR-1</td>
              <td>1</td>
              <td>
                <ul id='ul1'>
                  <li>- Thực hành trên cabin</li>
                  <li>- Thực hành trên đường</li>
                  <li>- Thực hành trên xe tự động</li>
                  <li>- Thực hành trên xe tổng hợp trong hình</li>
                </ul>
              </td>
              <td>5/10/2023 - 21/10/2023</td>
              <td>
                <Link to="/form" className='adangky'>Đăng kí</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-contentss">
        <div className="table-content-A">
          <h1>A/ Đào Tạo Lý Thuyết</h1>
          <fieldset>
            <legend>Chương trình học</legend>
            <p>Học trực tiếp tại các cơ sở của trường hoặc học online tại nhà.</p>
            <p>Chương trình lý thuyết theo quy chế mới gồm 4 buổi – mỗi tuần học 1 buổi = 4 tuần hoàn tất chương trình lý thuyết.</p>
            <p>Tuy nhiên, nhà trường sẽ đào tạo lý thuyết không giới hạn nên các bạn học viên nếu chưa nắm vững sẽ được học đi học lại hoàn toàn miễn phí đến khi nào cảm thấy tự tin.</p>
            <p>Mặt khác, nếu bạn học viên nào bận quá không đến lớp được, sẽ được giáo viên hướng dẫn phương pháp tự học tại nhà.</p>
          </fieldset>

        </div>

        <div className="table-content-B">
          <h1>B/ Đào Tạo Thực Hành</h1>
          <fieldset>
            <legend>Chương trình học</legend>
            <p>+ 02 buổi học đầu tiên (khoảng 6h): học viên học lái xe cơ bản tại sân tập để biết cách điều khiển xe (đề máy, vào ga, đạp phanh, vào số tiến, lùi, rẽ trái rẽ phải...) Đây là bước rất quan trọng tạo tiền đề cho học viên bước qua các bài tập nâng cao sau này.</p>
            <p>+ 02 buổi tập lái tiếp theo (khoảng 6h): học viên tập trên xe Cabin mô phỏng theo các tình huống xảy ra trên đường (mô phỏng thực tế ảo) theo quy chế mới của Bộ GTVT.</p>
            <p>+ 03 buổi học tiếp theo (khoảng 10h): Các bạn được học 13 bài sa hình tại các sân tập của trường để luyện thi, phần này cực kì quan trọng vì 90% khả năng thi đậu sát hạch cuối khoá của Sở GTVT sẽ phụ thuộc vào phần thi sa hình → các bạn học viên lưu ý phần này nhé.</p>
            <p>+ 06 buổi tập cuối cùng (khoảng 18h): Học viên chạy thực tế quãng đường hỗn hợp (đường trường) sao cho đủ kinh nghiệm lái xe 710km theo quy chế mới - chạy đường trường có camera ghi hình và truyền tải về Sở GTVT để kiểm tra. Trong phần đào tạo này các bạn học viên sẽ được truyền tải rất nhiều kĩ năng xử lý khi điều khiển xe trên đường như:</p>
            <ul>
              <li>Kĩ năng lái xe ban đêm</li>
              <li>Kĩ năng lái xe đường đèo, dốc....</li>
              <li>Kĩ năng xử lý tình huống nguy cấp</li>
              <li>Kĩ năng vượt xe an toàn</li>
              <li>Kĩ năng lái xe trời mưa, đường trơn trượt</li>
              <li>Kĩ năng lái xe đường dài....</li>
            </ul>
          </fieldset>
        </div>


        <div className="table-content-C">
          <h1>Chúng Tôi Cam Kết</h1>
          <fieldset>
            <legend>Lời cam kết</legend>
            <p>1. Học phí niêm yết công khai. Học viên nộp học phí trực tiếp tại phòng kế toán của trung tâm và nhận lại biên lai sau khi nộp. Học viên có thể nộp học phí làm 2 đợt.</p>
            <p>2. Không phát sinh chi phí khi học. Chúng tôi cam kết khi bạn học lái xe tại Trung tâm sẽ không phát sinh bất kỳ khoản phí nào trong quá trình học.</p>
            <p>3. Thời gian đào tạo lái xe theo quy định: 3 - 5 tháng. Lịch học linh động. Học viên tự sắp xếp, trao đổi với giáo viên về thời gian học tùy theo thời gian rảnh cá nhân. Chúng tôi công khai lịch học và thi trên trang web giúp học viên tiện theo dõi.</p>
            <p>4. Giáo viên nhiệt tình, chu đáo, trình độ cao, khả năng sư phạm tốt. Sử dụng công nghệ vào giảng dạy.</p>
            <p>5. Ứng dụng công nghệ dạy học trực tuyến như sử dụng các bài giảng online lý thuyết, chia sẻ hình ảnh trực quan các bài tập thực hành bằng các phần mềm dạy học.</p>
            <p>6. Xe tập lái sử dụng học thực hành theo đúng hạng xe thi.</p>
          </fieldset>

        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default CoursePageStudent