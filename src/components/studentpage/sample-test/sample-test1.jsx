import { Button, Spin } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useGetSampleTestById from '../../../apis/sample-test/useGetSampleTestById';
import usePostDataTest from '../../../apis/sample-test/usePostDataTest';
import { setSampleTesCur } from '../../../redux/userSlice/userSlice';
import TestComponent from './TestComponent';
import Timer from './useCountDown';

function SampleTest1() {
    const { sampleTestId } = useParams()
    const userId = localStorage.getItem('userId');
    const sampleTest1 = sampleTestId

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedLi, setSelectedLi] = useState(null);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
    const [chosenAnswers, setChosenAnswers] = useState({});
    const [colorFlag, setColorFlag] = useState(true);
    const { data } = useGetSampleTestById(sampleTest1)
    const { insertAnswer, insertAnswerPending } = usePostDataTest()
    const mappedData = data?.map((d) => d.question)
    const outputArray = Object.entries(chosenAnswers).map(([questionId, answer]) => ({
        SampleTestId: sampleTest1,
        StudentId: userId,
        QuestionId: parseInt(questionId),
        AnswerChoose: answer
    }));
    const handleQuestionChange = (index, outputArray) => {
        const uniqueQuestionIds = [...new Set(mappedData?.map(q => q.questionId))];

        if (index >= 0 && index < uniqueQuestionIds.length) {
            const currentQuestionId = uniqueQuestionIds[index];
            const currentIndex = mappedData.findIndex(q => q.questionId === currentQuestionId);
            setCurrentQuestion(mappedData?.filter(q => q.questionId === currentQuestionId));
            setSelectedLi(currentIndex);
            setSelectedQuestionIndex(currentIndex);
        }
    };


    const dispatch = useDispatch()
    const handleSubmit = async () => {
        dispatch(setSampleTesCur(sampleTest1))
        const dataToSubmit = outputArray
        await insertAnswer(dataToSubmit)
    }

    const handleWhenOutTime = async () => {
        dispatch(setSampleTesCur(sampleTest1))
        await insertAnswer(outputArray)
    }


    return (
        <div className='theory'>
            <h1>Thi sát hạch lý thuyết lái xe B1</h1>
            <div className='timer'>
                <Timer duration={20 * 60 * 1000} callback={handleWhenOutTime} />
            </div>
            <div className="container-theory">
                <div className="button-list">
                    <ul>
                        {mappedData?.map((_, index) => {
                            const isItemSelected = selectedQuestionIndex === index;
                            const isMarked = colorFlag && outputArray.some(item => item.QuestionId === mappedData[index]?.questionId);

                            return (
                                <li
                                    key={index}
                                    className={`${isItemSelected ? 'selected' : ''} ${isMarked && !isItemSelected ? 'marked' : ''}`}
                                    onClick={() => handleQuestionChange(index, outputArray)}
                                >
                                    {1 + index}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="question-display">
                    {currentQuestion && <TestComponent currentQuestion={currentQuestion[0]} sampleTest={sampleTest1} setChosenAnswers={setChosenAnswers} chosenAnswers={chosenAnswers} />}
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
                <Button disabled={outputArray?.length < mappedData?.length} onClick={handleSubmit}>{insertAnswerPending ? <Spin /> : 'Submit'}</Button>

            </div>
        </div>
    );
}

export default SampleTest1;
