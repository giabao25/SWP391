import { Button } from 'antd';
import React, { useState } from 'react';
import usePostDataStudent from '../../../apis/user/usePostDataStudent';

const AddUser = () => {
    const [error, setError] = useState('')
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
        setError('');
    }

    const handleSubmit = async () => {
        const { userId, password, roleId } = formData
        const gmailRegex = /@gmail\.com$/;
        if (gmailRegex.test(userId)) {
            const dataForPost2 = {
                StudentId: userId,
                RoleId: roleId,
                StudentNavigation: {
                    UserId: userId,
                    Password: password,
                    RoleId: roleId
                }
            };

            await insert(dataForPost2);
        } else {
            setError('Phải đúng định dạng ...@gmail.com')
        }
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
            <div className='title-add'>Tạo tài khoản cho học viên</div>
            <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                <div className="form" >
                    <label>Email</label>
                    <input
                        type="email"
                        name="userId"
                        required
                        value={formData.userId}
                        onChange={handleChange}
                    />
                    <span style={{ color: 'red' }}>{error}</span>
                </div>
                <div className="form">
                    <label>Mật khẩu</label>
                    <input
                        type="text"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <Button onClick={handleSubmit}>{insertPending ? 'Đang thêm...' : 'Thêm'}</Button>
            </div>
        </div>
    )
}

export default AddUser