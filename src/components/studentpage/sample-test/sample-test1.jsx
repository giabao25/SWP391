import React, { useState } from 'react';
import useGetSampleTestById from '../../../apis/sample-test/useGetSampleTestById';
import TestComponent from './TestComponent';

function SampleTest1() {
    const sampleTest1 = 1
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedLi, setSelectedLi] = useState(null);
    const token = localStorage.getItem('token');
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    const { data } = useGetSampleTestById(sampleTest1)

    const mappedData = data?.map((d) => d.question)
    const handleQuestionChange = (index) => {
        const uniqueQuestionIds = [...new Set(mappedData?.map(q => q.questionId))];

        if (index >= 0 && index < uniqueQuestionIds.length) {
            const currentQuestionId = uniqueQuestionIds[index];
            const currentIndex = mappedData.findIndex(q => q.questionId === currentQuestionId);

            setCurrentQuestion(mappedData?.filter(q => q.questionId === currentQuestionId));
            setSelectedLi(currentIndex);
            setSelectedQuestionIndex(currentIndex);
        }
    };


    return (
        <div className='theory'>
            <h1>Thi sát hạch lý thuyết lái xe B1 đề số 1</h1>

            <div className="container-theory">
                <div className="button-list">
                    <ul>
                        {mappedData?.map((_, index) => (
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
                    {currentQuestion && <TestComponent currentQuestion={currentQuestion[0]} />}
                </div>
            </div>
        </div>
    );
}

export default SampleTest1;
