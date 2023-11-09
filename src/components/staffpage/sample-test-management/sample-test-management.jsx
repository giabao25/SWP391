import React, { useState } from 'react'
import './sample.css'
import useGetAllSampleTest from '../../../apis/sample-test/useGetAllSampleTest'
import { Button } from 'antd'
import useGetSampleTestById from '../../../apis/sample-test/useGetSampleTestById'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SampleTestTable from './SampleTestTable'

const SampleTestWapper = ({ data, setToggle, setSampleTestId }) => {
    const handleDetail = (id) => {
        setToggle('question-sample')
        setSampleTestId(id)
    }
    return <div className='test-wrapper'>
        {data.map((test, index) => (
            <div key={index} className="test-card">
                <div className="test-number">Bộ đề số {test.sampleTestId}</div>
                <div className="test-total-question">{test.totalQuestions} câu hỏi</div>
                <div className='test-button'>
                    <Button onClick={() => handleDetail(test.sampleTestId)}>Chi tiết</Button>
                </div>
            </div>
        ))}

    </div>
}

const QuestionSample = ({ id, setToggle }) => {
    const { data, isLoading } = useGetSampleTestById(id)
    return <div className='SampleManagement'>
        <div className="icon-back" onClick={() => setToggle('main-part')}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </div>
        <div className='title-sample'>Tổng hợp {data?.length} câu hỏi</div>
        {isLoading ? 'Loading...' : <SampleTestTable data={data} />}
    </div>
}


const SampleTestComponent = () => {
    const [toggle, setToggle] = useState('main-part')
    const { data, isLoading } = useGetAllSampleTest()
    const [sampleTestId, setSampleTestId] = useState()
    return (
        <>
            {toggle === 'main-part' ? <div className='SampleManagement'>
                {isLoading ? 'Loading...' : <SampleTestWapper data={data} setToggle={setToggle} setSampleTestId={setSampleTestId} />}
            </div> : toggle === 'question-sample' ? <QuestionSample id={sampleTestId} setToggle={setToggle} /> : null}


        </>
    )
}

export default SampleTestComponent