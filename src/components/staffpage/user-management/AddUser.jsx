import { Button } from 'antd';
import React, { useState } from 'react'
import useAddUser from '../../../apis/user/useAddUser';

const AddUser = () => {

    const { add, addPending } = useAddUser()

    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        roleId: 'ST'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async () => {
        await add(formData)
    }

    return (
        <div style={{
            width: '60%',
            minWidth: '400px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 20
        }}>
            <div className='title-add'>Add user</div>
            <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                <div className="form" >
                    <label>User Id</label>
                    <input
                        type="text"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                    />
                </div>
                <div className="form">
                    <label>Password</label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <Button onClick={handleSubmit}>{addPending ? 'Adding...' : 'Add'}</Button>
            </div>
        </div>
    )
}

export default AddUser