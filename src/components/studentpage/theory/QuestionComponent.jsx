import React, { useState } from 'react';

const QuestionComponent = ({ currentQuestion }) => {
    const [userAnswer, setUserAnswer] = useState(null);

    const handleOptionClick = (selectedAnswer) => {
        setUserAnswer(selectedAnswer);
    };

    const answerArray = Object.keys(currentQuestion).reduce((acc, key) => {
        if (key.startsWith('answers')) {
            acc[key] = currentQuestion[key];
        }
        return acc;
    }, {});

    const answerList = {};

    Object.keys(answerArray).forEach((key, index) => {
        if (answerArray[key] !== null) {
            answerList[String.fromCharCode(97 + index)] = {
                answer: answerArray[key],
            };
        } else {
            answerList[String.fromCharCode(97 + index)] = null;
        }
    });

    Object.keys(answerList).forEach((key) => {
        if (answerList[key] && answerList[key].answer === userAnswer) {
            if (answerList[key].answer === currentQuestion.correctAnswer) {
                answerList[key].props = 'correct';
            } else {
                answerList[key].props = 'incorrect';
            }
        }
    });

    console.log(currentQuestion)

    return (
        <div className="question-display-theory">
            <p style={{ textAlign: 'center', color: '#cc0000', fontWeight: 'bold' }}>Câu hỏi {currentQuestion.questionId}</p>
            <p style={{ fontWeight: 'bold' }}>{currentQuestion.question1}</p>
            <div className='question-display-container'>
                <img src={currentQuestion.imageUrl} alt="" />
                {Object.keys(answerList).map((key) => (
                    answerList[key] ? (
                        <div
                            key={key}
                            className={`option ${answerList[key].props || ''}`}
                            onClick={() => handleOptionClick(answerList[key].answer)}
                        >
                            {answerList[key].answer}
                        </div>
                    ) : null
                ))}
            </div>

        </div>
    );
};

export default QuestionComponent;
