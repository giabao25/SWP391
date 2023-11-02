import React, { useState } from 'react';

function SampleTest1() {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedLi, setSelectedLi] = useState(null);

    // Số thứ tự của câu hỏi hiện tại
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    // Danh sách câu hỏi và đáp án (đủ 35 câu)
    const questions = Array.from({ length: 35 }, (_, index) => ({
        question: `Câu hỏi ${index + 1}: Nội dung câu hỏi ${index + 1}`,
        answer: `Đáp án cho câu hỏi ${index + 1}`,
    }));

    // Hàm xử lý khi thay đổi câu hỏi
    const handleQuestionChange = (index) => {
        if (index >= 0 && index < questions.length) {
            setCurrentQuestion(questions[index]);
            setSelectedLi(index);
            setSelectedQuestionIndex(index);
        }
    };

    return (
        <div className='theory'>
            <h1>Thi sát hạch lý thuyết lái xe B1 đề số 1</h1>

            <div className="container-theory">
                <div className="button-list">
                    <ul>
                        {questions.map((_, index) => (
                            <li
                                key={index}
                                className={selectedQuestionIndex === index ? 'selected' : ''}
                                onClick={() => handleQuestionChange(index)}
                            >
                                {1 + index}
                            </li>
                        ))}
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
        </div>
    );
}

export default SampleTest1;
