import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import React, { useState } from 'react';
import QuestionFormEdit from './QuestionFormEdit';
import usePostQuestionUpdate from '../../../../apis/theory/usePostUpdateQuestion';

const QuestionAnswers = ({ data }) => {
    const [imageUrl, setImageUrl] = useState(data?.imageUrl)
    const [ans1, setAns1] = useState(data?.answers1);
    const [ans2, setAns2] = useState(data?.answers2);
    const [ans3, setAns3] = useState(data?.answers3 || 'Không có');
    const [ans4, setAns4] = useState(data?.answers4 || 'Không có');
    const [correctAns, setCorrectAns] = useState(data?.correctAnswer);
    const [edit, toggleEdit] = useState(false);
    const { updateQuestion, updateQuestionPending } = usePostQuestionUpdate()
    const handleChangeState = () => {
        toggleEdit(!edit)
    }

    const submit = async () => {
        const answers = { ans1, ans2, ans3, ans4 };

        Object.keys(answers).forEach(key => {
            const value = answers[key];
            if (value === 'Không có') {
                answers[key] = null;
            }
        });
        const dataToPost = {
            questionId: data?.questionId,
            categoryId: data?.categoryId,
            question1: data?.question1,
            imageUrl: imageUrl,
            answers1: answers.ans1,
            answers2: answers.ans2,
            answers3: answers.ans3,
            answers4: answers.ans4,
            correctAnswer: correctAns,
            category: null
        }

        await updateQuestion(dataToPost)

    }

    return (
        <>
            {edit ? <QuestionFormEdit loading={updateQuestionPending} submit={submit} setImageUrl={setImageUrl} imageUrl={imageUrl} setAns1={setAns1} ans1={ans1} setAns2={setAns2} ans2={ans2} setAns3={setAns3} ans3={ans3} setAns4={setAns4} ans4={ans4} setCorrectAns={setCorrectAns} correctAns={correctAns} toggleEdit={toggleEdit} edit={edit} /> :
                <div>
                    <div>
                        {imageUrl ? <img src={imageUrl} alt='hinh anh' /> : null}
                        <div style={{ fontWeight: 'bold', paddingBottom: '10px' }}>Các câu trả lời</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div>
                                - {ans1}
                            </div>
                            <div>
                                - {ans2}
                            </div>
                            <div>
                                - {ans3}
                            </div>
                            <div>
                                - {ans4}
                            </div>
                        </div>

                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold', padding: '10px 0 10px 0' }}>Câu trả lời đúng là: </div>
                        <div>
                            - {correctAns}
                        </div>
                    </div>
                    <Button onClick={handleChangeState} style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}><span style={{ paddingRight: '10px' }}>Edit</span> <FontAwesomeIcon icon={faPenToSquare} /> </Button>
                </div>
            }

        </>
    )
}

export default QuestionAnswers