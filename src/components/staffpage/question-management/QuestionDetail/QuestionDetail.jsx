import { Spin } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import useGetTheoryById from '../../../../apis/theory/useGetTheoryById'
import QuestionAnswers from './QuestionAnswers'
import './stand.css'

const QuestionDetail = () => {
    const { questionId } = useParams()

    const { data, isLoading } = useGetTheoryById(questionId)

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: ' center',
            justifyContent: 'center',
        }}>
            {isLoading ? <Spin /> : <div className='question-container'>
                <div style={{ fontWeight: 'bold', color: 'red' }}>Câu hỏi số {data.questionId}</div>
                <div>{data.questionId}. {data.question1}</div>
                <QuestionAnswers data={data} />
            </div>}
        </div>
    )
}

export default QuestionDetail