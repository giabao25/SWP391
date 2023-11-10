import { Button } from 'antd'
import React from 'react'

const QuestionFormEdit = ({ loading, submit, setImageUrl, imageUrl, setAns1, ans1, setAns2, ans2, setAns3, ans3, setAns4, ans4, setCorrectAns, correctAns, toggleEdit, edit }) => {

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '800px' }}>
                <div>
                    {imageUrl ? <>
                        <div className="Cau1">
                            <label>Hình ảnh</label>
                            <img style={{ backgroundImage: 'cover', width: '500px', height: '300px' }} src={imageUrl} alt="hinh nah" />
                            <input
                                type="text"
                                name="imageUrl"
                                defaultValue={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                        </div>
                    </> : null}
                </div>
                <div className="Cau1">
                    <label>Đáp án số 1</label>
                    <input
                        type="text"
                        name="ans1"
                        defaultValue={ans1}
                        onChange={(e) => setAns1(e.target.value)}
                    />
                </div>
                <div className="Cau2">
                    <label>Đáp án số 2</label>
                    <input
                        type="text"
                        name="ans2"
                        defaultValue={ans2}
                        onChange={(e) => setAns2(e.target.value)}
                    />
                </div>
                <div className="Cau3">
                    <label>Đáp án số 3</label>
                    <input
                        type="text"
                        name="ans3"
                        defaultValue={ans3}
                        onChange={(e) => setAns3(e.target.value)}
                    />
                </div>
                <div className="Cau4">
                    <label>Đáp án số 4</label>
                    <input
                        type="text"
                        name="ans4"
                        defaultValue={ans4}
                        onChange={(e) => setAns4(e.target.value)}
                    />
                </div>
                <div className="dapan">
                    <label>Đáp án đúng</label>
                    <input
                        type="text"
                        name="correctAns"
                        defaultValue={correctAns}
                        onChange={(e) => setCorrectAns(e.target.value)}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '20px', justifyContent: 'center' }}>
                <div>
                    <Button onClick={submit}> {loading ? 'Updating...' : 'Update'}</Button>
                </div>
                <div>
                    <Button danger onClick={() => toggleEdit(!edit)}>Go back</Button>
                </div>
            </div>

        </div>
    )
}

export default QuestionFormEdit