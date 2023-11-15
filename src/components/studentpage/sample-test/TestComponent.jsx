import React, { useState } from 'react';

const TestComponent = ({ currentQuestion, setChosenAnswers, chosenAnswers }) => {
    const [userAnswer, setUserAnswer] = useState(null);
    const handleOptionClick = (selectedAnswer) => {
        setUserAnswer(selectedAnswer);
        setChosenAnswers({ ...chosenAnswers, [currentQuestion.questionId]: selectedAnswer });
    };

    const answerArray = Object.keys(currentQuestion).reduce((acc, key) => {
        if (key.startsWith('answers') && currentQuestion[key] !== null) {
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
            answerList[key].props = 'chosen';
        }
    });

    return (
        <div className="question-display-theory">
            {/* <p style={{ textAlign: 'center', color: '#cc0000', fontWeight: 'bold' }}>Câu hỏi {currentQuestion.questionId}</p> */}
            <p style={{ fontWeight: 'bold' }}>{currentQuestion.question1}</p>
            <img src={currentQuestion.imageUrl} alt="" />
            <div className='question-display-container'>
                {Object.keys(answerList).map((key) => (
                    <div
                        key={key}
                        className={`option ${answerList[key]?.props || ''}${chosenAnswers[currentQuestion.questionId] === answerList[key]?.answer ? ' chosen' : ''
                            }`}
                        onClick={() => handleOptionClick(answerList[key]?.answer)}
                    >
                        {answerList[key]?.answer}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TestComponent;
