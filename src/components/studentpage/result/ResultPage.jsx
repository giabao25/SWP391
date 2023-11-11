import React from 'react'
import { useSelector } from 'react-redux'
import './result.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import useGetTotalChoose from '../../../apis/sample-test/useGetTotalChoose'
import { Button, Spin } from 'antd'
import { useNavigate } from 'react-router-dom'
import useDeleteSampleTestData from '../../../apis/sample-test/useDeleteSampleTestData'
const ResultComponent = ({ sampleTestCurrent }) => {
    const nav = useNavigate()
    const { data, isLoading } = useGetTotalChoose(sampleTestCurrent)
    const { deleteData, deleteDataPending } = useDeleteSampleTestData()
    const handleTryAgainTest = async () => {
        await deleteData(sampleTestCurrent)
    }

    return <div className='box-wrapper'>
        <div className='correct-icon'>
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#42cdaa", fontSize: '50px' }} />
            <span className='correct-title'>Congratulations you made it</span>
        </div>
        <div className='result-score'>
            <div className="title-better">You can do better</div>
            <div className='title-score'>
                {isLoading ? 'We are calculating your points...' : data}
            </div>
        </div>
        <div className='button-nav'>
            {deleteDataPending ? <Button style={{ width: '150px' }} type='primary' disabled><Spin /></Button> : <Button style={{ width: '150px' }} type='primary' onClick={handleTryAgainTest}>Try again!</Button>}

            <Button style={{ width: '150px' }} danger onClick={() => nav('/student')}>Go back home</Button>
        </div>
    </div>
}

const ResultPage = () => {

    const { sampleTestCurrent } = useSelector(state => state.user)

    if (!sampleTestCurrent) {
        return <div>Please wait...</div>
    }

    return (
        <div className='result-box'>
            <ResultComponent sampleTestCurrent={sampleTestCurrent} />
        </div>
    )
}

export default ResultPage