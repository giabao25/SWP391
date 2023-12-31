import { Button } from 'antd';
import React, { useState } from 'react';
import usePostDataStudent from '../../../apis/user/usePostDataStudent';

const AddUser = () => {
    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [error, setError] = useState('')
    const { insert, insertPending } = usePostDataStudent()
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        roleId: 'ST'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone") {
            const numericValue = value.replace(/\D/g, '');
            setFormData({
                ...formData,
                [name]: numericValue,
            });
            if (value !== numericValue) {
                setPhoneError('Số điện thoại chỉ được nhập số');
            } else {
                setPhoneError('');
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });

            setError('');
        }

        setEmailError('');
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validateEmail = (email) => {
        return email.match(re);
    };
    const handleSubmit = async () => {
        const { userId, password, roleId, fullName, address, phone } = formData
        if (!userId || !password || !fullName || !address || !phone) {
            setError('Vui lòng điền đầy đủ thông tin');
            return;
        }

        if (validateEmail(userId)) {
            const dataForPost2 = {
                StudentId: userId,
                RoleId: roleId,
                address: address,
                studentName: fullName,
                phone: phone,
                StudentNavigation: {
                    UserId: userId,
                    Password: password,
                    RoleId: roleId
                }
            };

            await insert(dataForPost2);
        } else {
            setEmailError('Phải đúng định dạng ...@gmail.com')
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
                    <span style={{ color: 'red' }}>{emailError}</span>
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
                <div className="form">
                    <label>Họ và tên</label>
                    <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form">
                    <label>Địa chỉ</label>
                    <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="form">
                    <label>Số điện thoại</label>
                    <input
                        id='phone'
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                    />
                    <span style={{ color: 'red' }}>{phoneError}</span>

                </div>
            </div>
            <div>
                <Button onClick={handleSubmit}>{insertPending ? 'Đang thêm...' : 'Thêm'}</Button>
            </div>
            <span style={{ color: 'red' }}>{error}</span>

        </div>
    )
}

export default AddUser