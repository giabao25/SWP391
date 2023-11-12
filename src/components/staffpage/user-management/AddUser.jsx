import { Button } from 'antd';
import React, { useState } from 'react';
import usePostDataStudent from '../../../apis/user/usePostDataStudent';

const AddUser = () => {

    const { insert, insertPending } = usePostDataStudent()
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
        const { userId, password, roleId } = formData

        const dataForPost2 = {
            StudentId: userId,
            RoleId: roleId,
            StudentNavigation: {
                UserId: userId,
                Password: password,
                RoleId: roleId
            }
        }
        await insert(dataForPost2)
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
                        type="email"
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
                <Button onClick={handleSubmit}>{insertPending ? 'Adding...' : 'Add'}</Button>
            </div>
        </div>
    )
}

export default AddUser