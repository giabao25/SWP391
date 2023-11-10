import { Button, Space, Table } from 'antd';
import React from 'react';
import useDeleteQuestion from '../../../apis/theory/useDeleteQuestion';
const { Column } = Table;
const SampleTestTable = ({ data }) => {
    const data2 = data.map(da => da.question)

    const { deleteQuest } = useDeleteQuestion()

    const handleDelete = async (sampleTestId, questionId) => {
        const postDATA = [{
            sampleTestId,
            questionId: String(questionId)
        }]
        await deleteQuest(postDATA)
    }
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
                            <Button onClick={() => handleDelete(data[0]?.sampleTestId, data2.questionId)}>Delete</Button>
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

export default SampleTestTable