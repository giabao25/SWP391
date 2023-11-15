import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Select, Spin } from 'antd'
import React, { useState } from 'react'
import useGetAllSampleTest from '../../../apis/sample-test/useGetAllSampleTest'
import useGetSampleTestById from '../../../apis/sample-test/useGetSampleTestById'
import usePostQuestionToSampleTest from '../../../apis/sample-test/usePostQuestionToSampleTest'
import useGetTheory from '../../../apis/theory/useGetTheory'
import SampleTestTable from './SampleTestTable'
import './sample.css'
import AddNewSampleTest from './AddNewSampleTest'
const SampleTestWapper = ({ data, setToggle, setSampleTestId }) => {
    const handleDetail = (id) => {
        setToggle('question-sample')
        setSampleTestId(id)
    }
    return <>
        <div className='icon-back' onClick={() => setToggle('add-new-sample-test')}>
            <FontAwesomeIcon icon={faPlus} />
            Add
        </div>
        <div className='test-wrapper'>

            <>
                {data.map((test, index) => (
                    <div key={index} className="test-card">
                        <div className="test-number">Bộ đề số {test.sampleTestId}</div>
                        <div className="test-total-question">{test.totalQuestions} câu hỏi</div>
                        <div className='test-button'>
                            <Button onClick={() => handleDetail(test.sampleTestId)}>Chi tiết</Button>
                        </div>
                    </div>
                ))}

            </>

        </div>
    </>

}

const QuestionSample = ({ id, setToggle }) => {
    const { data, isLoading } = useGetSampleTestById(id)
    return <div className='SampleManagement'>
        <div className="icon-back" onClick={() => setToggle('main-part')}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </div>
        <div className='icon-back' onClick={() => setToggle('add-question-to-sample-test')}>
            <FontAwesomeIcon icon={faPlus} />
            Add
        </div>
        <div className='title-sample'>Tổng hợp {data?.length} câu hỏi</div>
        {isLoading ? 'Loading...' : <SampleTestTable data={data} />}
    </div>
}

const AddQuestSampleTest = ({ questionOp, id, setToggle }) => {

    const [questionId, setQuestionId] = useState(null)

    const handleChange = (value) => {
        setQuestionId(value)
    };
    const transformedArray = questionOp.map((question) => ({
        value: question.questionId,
        label: question.questionId + '. ' + question.question1,
    }));

    const { addQuestion, addQuestionPending } = usePostQuestionToSampleTest()

    const handleClickAdd = async () => {
        console.log(questionId)
        console.log(id)
        const dataToPost = [{
            questionId,
            sampleTestId: id
        }]
        await addQuestion(dataToPost)
    }

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return <div className='SampleManagement'>
        <div className="icon-back" onClick={() => setToggle('question-sample')}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </div>
        <Select
            showSearch
            filterOption={filterOption}
            defaultValue="Chọn câu hỏi"
            style={{
                width: 1000,
                height: 40
            }}
            onChange={handleChange}
            options={transformedArray}
        />
        <div><Button style={{ marginTop: '20px' }} onClick={handleClickAdd}>{addQuestionPending ? <Spin /> : 'Thêm câu hỏi vào bộ đề'}</Button></div>
    </div>
}

const SampleTestComponent = () => {
    const [toggle, setToggle] = useState('main-part')
    const { data, isLoading } = useGetAllSampleTest()
    const { data: questionOp } = useGetTheory()
    const [sampleTestId, setSampleTestId] = useState()
    return (
        <>
            {toggle === 'main-part' ? <div className='SampleManagement'>
                {isLoading ? 'Loading...' : <SampleTestWapper data={data} setToggle={setToggle} setSampleTestId={setSampleTestId} />}
            </div> : toggle === 'question-sample' ? <QuestionSample id={sampleTestId} setToggle={setToggle} /> : toggle === 'add-question-to-sample-test' ? <AddQuestSampleTest setToggle={setToggle} id={sampleTestId} questionOp={questionOp} /> : toggle === 'add-new-sample-test' ? <AddNewSampleTest setToggle={setToggle} data={data} /> : null}
        </>
    )
}

export default SampleTestComponent