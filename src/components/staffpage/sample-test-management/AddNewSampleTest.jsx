import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd';
import React, { useState } from 'react'
import usePostNewSampleTest from '../../../apis/sample-test/usePostNewSampleTest';

const AddNewSampleTest = ({ setToggle, data }) => {

    const sampIdUsed = data.map(s => s.sampleTestId)
    const [formData, setFormData] = useState({
        sampleTestId: '',
        totalQuestions: '',
    });
    const { postNewTest, postNewTestPending } = usePostNewSampleTest()
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'sampleTestId' || name === 'totalQuestions') {
            if (/^\d+$/.test(value) || value === '') {
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }

    }
    const handleSubmit = async () => {
        const { sampleTestId } = formData;

        // if (sampIdUsed.includes(sampleTestId)) {
        //     //alert("Duplicate sampleTestId. Please enter a different number.");
        // } else {

        //     // Handle form submission logic here
        //     await postNewTest(formData)
        // }
        await postNewTest(formData)
    }

    return (
        <div className='SampleManagement'>
            <div className="icon-back" onClick={() => setToggle('main-part')}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Trở lại
            </div>
            <div style={{
                width: '60%',
                minWidth: '400px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 20
            }}>
                <div className='title-add'>Tạo đề thi thử</div>
                <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                    <div className="form" >
                        <label>Bộ đề số </label>
                        <input
                            type="text"

                            name="sampleTestId"
                            value={formData.sampleTestId}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form">
                        <label>Tổng câu hỏi cho bộ đề</label>
                        <input
                            type="text"

                            name="totalQuestions"
                            value={formData.totalQuestions}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <Button onClick={handleSubmit} loading={postNewTestPending}>Tạo</Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewSampleTest