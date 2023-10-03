import React from 'react'
import "./About.css"
import Features from "../Features/Features"
function About() {
  return (
    <div className="contain">
        <div className='content'>
            <h1>TRƯỜNG LÁI XE SAIGON TOURIST</h1>
            <p className="contentp">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </p>
        </div>

        <section id="about-container">
            <div className="about-img">
                <img src="https://daylaixehanoi.vn/wp-content/uploads/2020/05/hoc-bang-lai-b1-de-hon-b2.png" alt="Mô tả ảnh" />
            </div>

            <div className="about-text">
            <h2>Wellcome to TechEduca, Enhance your skills with best Online Courses</h2>
            <p>Trung tâm dạy lái xe Saigon Tourist hân hạnh mang đến cho Quý khách hàng, học viên khóa học lái xe ô tô các hạng B1, B2, C 
                cấp tốc thi nhanh, dạy học uy tín và chất lượng tốt nhất hiện nay tại TP HCM. Với cơ sở vật chất hoàn toàn mới, xe dạy hạng B,
                 C mới 100 %; hệ thống sân tập lái xe đạt tiêu chuẩn theo quy định của Sở.
                 Chất Lượng đào tạo và thi lái xe của Trung Tâm Saigon Tourist luôn đứng TOP đầu tại TP HCM.
            </p>

            <div className="about-fe">
                <img src="https://cdn-icons-png.flaticon.com/512/1509/1509606.png" alt=""></img>
                <div className="fe-text">
                    <h5>Amazing</h5>
                    <p>You can start and finish one of these popular courses in under the day
                        Lorem ipsum dolor sit, amet consectetur
                         adipisicing elit. Doloribus est ducimus impedit mollitia architecto blanditiis harum repellat amet voluptatibus dolores. Molestiae reiciendis omnis, assume
                        nda dolorem sed possimus tempora eius corporis?
                    </p>
                </div>

            </div>

            <div className="about-fe">
                <img src="https://cdn-icons-png.flaticon.com/512/2972/2972117.png" alt=""></img>
                <div className="fe-text">
                    <h5>Amazing</h5>
                    <p>You can start and finish one of these popular courses in under the day
                        Lorem ipsum dolor sit amet consecte
                        tur adipisicing elit. Quam praesentium expl
                        icabo reiciendis error exercitationem similique esse recusandae? Placeat d
                        ebitis perferendis, inventore amet, quaerat numquam nihil poss
                        imus labore eos earum perspiciatis!
                    </p>
                </div>

            </div>


            </div>

        </section>
        <div><Features/></div>
    </div>



    
  )
}

export default About