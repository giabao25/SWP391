import { Button, Spin } from 'antd'
import React, { useState } from 'react'
import usePostUserData from '../../apis/user/usePostUserData';
import usePostPassword from '../../apis/user/usePostPassword';
import { useSnackbar } from 'notistack';
const FormChangePass = ({ setPart }) => {
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [currentPassword, setCurrentPassword] = useState()
    const { enqueueSnackbar } = useSnackbar()
    const userId = localStorage.getItem('userId');
    const roleId = localStorage.getItem('role');
    const { update, updatePending } = usePostPassword()
    const handleSubmit = async () => {
        if (password === confirmPassword) {
            const dataChangePass = {
                currentPassword,
                userId,
                password,
                roleId
            }
            await update(dataChangePass)
            setPassword('')
            setConfirmPassword('')
            setCurrentPassword('')
        } else {
            enqueueSnackbar('Mật khẩu mới phải trùng với mật khẩu xác nhận lại')
        }


    }
    return <div className='profile-container'>
        <div className="form-row">
            <div className="form-group">
                <label>Mật khẩu hiện tại</label>
                <input
                    type="password"
                    placeholder='Mật khẩu hiện tại'
                    name="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Mật khẩu mới</label>
                <input
                    type="password"
                    placeholder='Mật khẩu mới'
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Xác nhận lại mật khẩu mới</label>
                <input
                    type="password"
                    placeholder='Xác nhận lại mật khẩu'
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
        </div>
        <div className="form-row" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleSubmit}>
                {updatePending ? 'Đang đổi...' : 'Đổi'}
            </Button>
            <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => setPart('inforform')}>
                Quay lại
            </Button>
        </div>
    </div>
}
const StudenForm = ({ data, password }) => {
    const [part, setPart] = useState('inforform')
    const { update, updatePending } = usePostUserData()
    const [formData, setFormData] = useState({
        studentId: data?.studentId,
        roleId: data?.roleId,
        fullName: data?.studentName,
        address: data?.address,
        phone: data?.phone || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone' || name === 'idCardNumber') {
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
    };



    const handleSave = async () => {
        // Đưa dữ liệu đã nhập vào đây để xử lý lưu trữ hoặc gửi đi.
        const { fullName, address, phone, roleId, studentId } = formData;
        const dataForPost = {
            studentId: studentId,
            address: address,
            roleId: roleId,
            studentName: fullName,
            phone: phone,
            studentNavigation: {
                userId: studentId,
                password: password,
                roleId: roleId
            }
        }
        await update(dataForPost)
    };



    return (
        <>
            {part === 'inforform' ? <div className="profile-container">
                <h1>THÔNG TIN CÁ NHÂN</h1>
                <div className="form-row">
                    <div className="form-group">
                        <label>Họ và Tên:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Địa chỉ thường trú:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Số điện thoại:</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength="10"
                        />
                    </div>

                    <div className="form-row" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                        <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleSave}>
                            {updatePending ? <Spin size='small' /> : 'Lưu'}
                        </Button>
                        <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => setPart('next')}>
                            Đổi mật khẩu
                        </Button>
                    </div>
                </div>
            </div> : <FormChangePass setPart={setPart} />}

        </>

    )
}

export default StudenForm