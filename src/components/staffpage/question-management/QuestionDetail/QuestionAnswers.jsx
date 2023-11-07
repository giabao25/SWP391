import React, { useState } from 'react'
import { Button, Spin, Typography } from 'antd';
const { Paragraph } = Typography;

const QuestionAnswers = ({ data }) => {
    const [ans1, setAns1] = useState(data?.answers1);
    const [ans2, setAns2] = useState(data?.answers2);
    const [ans3, setAns3] = useState(data?.answers3);
    const [ans4, setAns4] = useState(data?.answers4);
    const [correctAns, setCorrectAns] = useState(data?.correctAnswer);

    const handleSubmit = () => {
        console.log(ans1)
        console.log(ans2)
        console.log(ans3)
        console.log(ans4)
        console.log(correctAns)
    }

    return (
        <div>
            <div>
                {data.imageUrl ? <img src={data.imageUrl} alt='hinh anh' /> : null}
                <div style={{ fontWeight: 'bold' }}>Các câu trả lời</div>
                <div>
                    <Paragraph
                        editable={{
                            onChange: setAns1,
                        }}
                    >
                        - {ans1 || <Spin />}
                    </Paragraph>
                </div>
                <div>
                    <Paragraph
                        editable={{
                            onChange: setAns2,
                        }}
                    >
                        - {ans2 || <Spin />}
                    </Paragraph>
                </div>
                <div>
                    <Paragraph
                        editable={{
                            onChange: setAns3,
                        }}
                    >
                        - {ans3 || 'Không có câu trả lời thứ 3'}
                    </Paragraph>
                </div>
                <div>
                    <Paragraph
                        editable={{
                            onChange: setAns4,
                        }}
                    >
                        - {ans4 || 'Không có câu trả lời thứ 4'}
                    </Paragraph>
                </div>
            </div>
            <div>
                <div style={{ fontWeight: 'bold' }}>Câu trả lời đúng là: </div>
                <Paragraph
                    editable={{
                        onChange: setCorrectAns,
                    }}
                >
                    - {correctAns || 'Không có câu trả lời thứ 4'}
                </Paragraph>
            </div>

            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default QuestionAnswers