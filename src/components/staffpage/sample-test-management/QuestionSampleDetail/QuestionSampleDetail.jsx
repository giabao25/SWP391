import React from 'react'
import { useParams } from 'react-router-dom'
import useGetQuestionInSampleTest from '../../../../apis/sample-test/useGetQuestionInSampleTest'
import { Spin } from 'antd'

const QuestionSampleDetail = () => {
    const { sampleId, questionId } = useParams()
    const { data, isLoading } = useGetQuestionInSampleTest({ sampleId, questId: questionId })
    console.log('data==>', data)

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: ' center',
            justifyContent: 'center',
        }}>
            {isLoading ? <Spin /> : <div className='question-container'>
                <div style={{ fontWeight: 'bold', color: 'red' }}>Câu hỏi số {data?.question.questionId}</div>
                <div>{data?.question.questionId}. {data?.question.question1}</div>
                {/* <QuestionAnswers data={data} /> */}
            </div>}
        </div>
    )
}

export default QuestionSampleDetail