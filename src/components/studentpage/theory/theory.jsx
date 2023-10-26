import React, { useState } from 'react';
import './theory.css';
import { Link } from 'react-router-dom';
import Footer from '../../homepage/footer/footer';
function Theory() {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedLi, setSelectedLi] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState('Chương 1'); // Mặc định chọn Chương 1

    // Số thứ tự của câu hỏi hiện tại
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    // Danh sách câu hỏi và đáp án
    const questions = [
        {
            question: "Câu hỏi 1: Nội dung câu hỏi 1",
            answer: "Đáp án cho câu hỏi 1",
        },
        {
            question: "Câu hỏi 2: Nội dung câu hỏi 2",
            answer: "Đáp án cho câu hỏi 2",
        },
        {
            question: "Câu hỏi 167: Nội dung câu hỏi 167",
            answer: "Đáp án cho câu hỏi 167",
        },
        // Thêm câu hỏi và đáp án khác ở đây
    ];

    // Hàm xử lý khi thay đổi câu hỏi
    const handleQuestionChange = (index) => {
        if (index >= 0 && index < questions.length) {
            setCurrentQuestion(questions[index]);
            setSelectedLi(index);
            setSelectedQuestionIndex(index);
        }
    };

    // Hàm xử lý khi thay đổi chương
    const handleChapterChange = (chapter) => {
        setSelectedChapter(chapter);
        setSelectedQuestionIndex(null); // Đặt lại câu hỏi khi chuyển chương
        setCurrentQuestion(null); // Đặt lại câu hỏi hiện tại khi chuyển chương
    };

    // Tạo danh sách 166 thẻ li cho Chương 1
    const liElementsChapter1 = Array.from({ length: 166 }, (_, index) => (
        <li
            key={index}
            className={selectedQuestionIndex === index ? 'selected' : ''}
            onClick={() => handleQuestionChange(index)}
        >
            {index + 1}
        </li>
    ));

    // Tạo danh sách 26 thẻ li cho Chương 2
    const liElementsChapter2 = Array.from({ length: 26 }, (_, index) => (
        <li
            key={166 + index}
            className={selectedQuestionIndex === 166 + index ? 'selected' : ''}
            onClick={() => handleQuestionChange(166 + index)}
        >
            {167 + index}
        </li>
    ));

    // Tạo danh sách 21 thẻ li cho Chương 3
    const liElementsChapter3 = Array.from({ length: 21 }, (_, index) => (
        <li
            key={192 + index}
            className={selectedQuestionIndex === 192 + index ? 'selected' : ''}
            onClick={() => handleQuestionChange(192 + index)}
        >
            {193 + index}
        </li>
    ));

    // Tạo danh sách 56 thẻ li cho Chương 4
    const liElementsChapter4 = Array.from({ length: 56 }, (_, index) => (
        <li
            key={213 + index}
            className={selectedQuestionIndex === 213 + index ? 'selected' : ''}
            onClick={() => handleQuestionChange(213 + index)}
        >
            {214 + index}
        </li>
    ));

    // Tạo danh sách 35 thẻ li cho Chương 5
    const liElementsChapter5 = Array.from({ length: 35 }, (_, index) => (
        <li
            key={269 + index}
            className={selectedQuestionIndex === 269 + index ? 'selected' : ''}
            onClick={() => handleQuestionChange(269 + index)}
        >
            {270 + index}
        </li>
    ));

    // Tạo danh sách 182 thẻ li cho Chương 6
    const liElementsChapter6 = Array.from({ length: 182 }, (_, index) => (
        <li
            key={304 + index}
            className={selectedQuestionIndex === 304 + index ? 'selected' : ''}
            onClick={() => handleQuestionChange(304 + index)}
        >
            {305 + index}
        </li>
    ));

    // Tạo danh sách 114 thẻ li cho Chương 7
    const liElementsChapter7 = Array.from({ length: 114 }, (_, index) => (
        <li
            key={486 + index}
            className={selectedQuestionIndex === 486 + index ? 'selected' : ''}
            onClick={() => handleQuestionChange(486 + index)}
        >
            {487 + index}
        </li>
    ));

    // Tạo danh sách 60 thẻ li cho Chương 8
    const chapter8LiNumbers = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33, 35, 36, 37, 40, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 84, 91, 101, 109, 112, 114, 118, 119, 143, 145, 147, 150, 153, 154, 161, 199, 200, 210, 211, 214, 221, 227, 231, 242, 245, 248, 258, 260, 261, 262];

    const liElementsChapter8 = chapter8LiNumbers.map(number => (
        <li
            key={number}
            className={selectedQuestionIndex === number ? 'selected' : ''}
            onClick={() => handleQuestionChange(number)}
        >
            {number}
        </li>
    ));;

    return (
        <div className='theory'>
            <h1>Học lý thuyết lái xe ô tô bằng B1 <br />
                600 câu lý thuyết thi bằng lái xe B1 mới nhất 2023</h1>

            <div className='chapter-header-btn'>
                <button onClick={() => handleChapterChange('Chương 1')}>Chương 1</button>
                <button onClick={() => handleChapterChange('Chương 2')}>Chương 2</button>
                <button onClick={() => handleChapterChange('Chương 3')}>Chương 3</button>
                <button onClick={() => handleChapterChange('Chương 4')}>Chương 4</button>
                <button onClick={() => handleChapterChange('Chương 5')}>Chương 5</button>
                <button onClick={() => handleChapterChange('Chương 6')}>Chương 6</button>
                <button onClick={() => handleChapterChange('Chương 7')}>Chương 7</button>
                <button onClick={() => handleChapterChange('Chương 8')}>Chương 8</button>
            </div>
            <div className="chapter-header">
                <span style={{ fontWeight: 'bold' }}>{selectedChapter}</span>: {selectedChapter === 'Chương 1' ? "166 câu về khái niệm và quy tắc giao thông đường bộ" : selectedChapter === 'Chương 2' ? "26 câu về nghiệp vụ vận tải" : selectedChapter === 'Chương 3' ? "21 câu về văn hóa giao thông và đạo đức người lái xe" : selectedChapter === 'Chương 4' ? "56 câu về kỹ thuật lái xe" : selectedChapter === 'Chương 5' ? "35 câu về cấu tạo và sửa chữa" : selectedChapter === 'Chương 6' ? "182 câu về hệ thống biển báo hiệu đường bộ" : selectedChapter === 'Chương 7' ? "114 câu về giải các thế sa hình và kỹ năng xử lý tình huống giao thông" : "60 câu về tình huống mất an toàn giao thông nghiêm trọng (câu hỏi điểm liệt)"}
            </div>
            <div className="container-theory">
                <div className="button-list">
                    <ul>
                        {selectedChapter === 'Chương 1' ? liElementsChapter1 : selectedChapter === 'Chương 2' ? liElementsChapter2 : selectedChapter === 'Chương 3' ? liElementsChapter3 : selectedChapter === 'Chương 4' ? liElementsChapter4 : selectedChapter === 'Chương 5' ? liElementsChapter5 : selectedChapter === 'Chương 6' ? liElementsChapter6 : selectedChapter === 'Chương 7' ? liElementsChapter7 : liElementsChapter8}
                    </ul>
                </div>
                <div className="question-display">
                    {currentQuestion && (
                        <div>
                            <p>{currentQuestion.question}</p>
                            <p>{currentQuestion.answer}</p>
                        </div>
                    )}
                </div>

            </div>
            <div className="exam-info">
                <h2>Thi sát hạch lý thuyết lái xe online B1</h2>
                <p>Mỗi đề gồm 30 câu hỏi và chỉ có 1 đáp án đúng duy nhất ở từng câu.</p>
                <p>Dựa theo cấu trúc đề thi lý thuyết B1 chính thức thì mỗi đề thi sát hạch lý thuyết B1 sẽ bao gồm:</p>
                <ul>
                    <li>1 câu hỏi phần khái niệm;</li>
                    <li>7 câu hỏi về quy tắc giao thông;</li>
                    <li>1 câu hỏi nghiệp vụ vận tải;</li>
                    <li>1 câu về tốc độ khoảng cách;</li>
                    <li>1 câu hỏi về văn hóa & đạo đức người lái xe;</li>
                    <li>2 câu hỏi về kỹ thuật lái xe;</li>
                    <li>1 câu hỏi về cấu tạo sữa chữa;</li>
                    <li>10 câu hỏi biển báo;</li>
                    <li>10 câu hỏi sa hình kèm theo 1 câu hỏi điểm liệt (tình huống gây mất an toàn giao thông nghiêm trọng).</li>
                </ul>
                <p>Học viên ôn tập cần đáp án ứng yêu cầu sau:</p>
                <ul>
                    <li>Số câu hỏi phải đúng: <span className="red-text">28/30 câu trở lên là đậu.</span></li>
                    <li>Thời gian làm đề thi: <span className="red-text">22 phút.</span></li>
                    <li>Yêu cầu đặc biệt: KHÔNG LÀM SAI CÂU ĐIỂM LIỆT (câu hỏi *)</li>
                </ul>
                <p>Lưu ý: Bộ đề thi bằng lái xe B1 này được xây dựng theo tài liệu 600 câu hỏi thi ô tô Tổng Cục Đường Bộ VN ban hành.</p>
            </div>
            <div className='theory-text'>
            <Link to = "#">Đề 1</Link>
            <Link to = "#">Đề 2</Link>
            <Link to = "#">Đề 3</Link>
            </div>
            <Footer />
        </div>
        
    );
}

export default Theory;
