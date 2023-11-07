import { Button, Table, Space } from 'antd';
import React from 'react';
import './question_management.css';
import useGetTheory from '../../../apis/theory/useGetTheory';
import { useNavigate } from 'react-router-dom';
const { Column } = Table;

const QuestionManagementComponent = () => {
    const nav = useNavigate()
    const { data } = useGetTheory()
    console.log(data)
    return (
        <div className='QuestionManagement'>
            <h1>Question Management</h1>
            <Table className='hollo' dataSource={data} size='small'>
                <Column title="Question ID" dataIndex="questionId" key="questionId" />
                <Column title="Question" dataIndex="question1" key="question1" />
                <Column
                    title="Action"
                    key="action"
                    render={(data) => (
                        <Space size="middle">
                            <Button onClick={() => nav(`/staff/question-detail/${data.questionId}`)}>View detail</Button>
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

export default QuestionManagementComponent