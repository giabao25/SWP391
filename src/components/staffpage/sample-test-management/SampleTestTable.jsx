import { Button, Space, Table } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
const { Column } = Table;
const SampleTestTable = ({ data }) => {
    const data2 = data.map(da => da.question)
    const nav = useNavigate()
    return (
        <div>
            <h1>Câu hỏi của bộ đề số {data[0]?.sampleTestId}</h1>
            <Table className='hollo' dataSource={data2} size='small'>
                <Column title="Question ID" dataIndex="questionId" key="questionId" />
                <Column title="Question" dataIndex="question1" key="question1" />
                <Column
                    title="Action"
                    key="action"
                    render={(data2) => (
                        <Space size="middle">
                            <Button onClick={() => nav(`/staff/question-sample-test-detail/${data[0]?.sampleTestId}/question/${data2.questionId}`)}>View detail</Button>
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

export default SampleTestTable