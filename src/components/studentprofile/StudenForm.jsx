import { Button, Spin } from 'antd'
import React, { useState } from 'react'
import usePostUserData from '../../apis/user/usePostUserData';

const StudenForm = ({ data, password }) => {

    const { update, updatePending } = usePostUserData()

    const [formData, setFormData] = useState({
        studentId: data?.studentId,
        roleId: data?.roleId,
        fullName: data?.studentName,
        // dateOfBirth: '',
        // gender: 'male',
        address: data?.address,
        // idCardNumber: '',
        // idCardIssuedDate: '',
        // idCardIssuedPlace: '',
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

    // const handleGenderChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         gender: e.target.value,
    //     });
    // };

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
        <div className="profile-container">
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
                {/* <div className="form-group">
            <label>Ngày Tháng Năm Sinh:</label>
            <input
                type="text"
                name="dateOfBirth"
                placeholder='VD 21/09/2000'
                value={formData.dateOfBirth}
                onChange={handleChange}
            />
        </div> */}
                {/* <div className="form-group">
            <label>Giới tính:</label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleGenderChange}
                />
                Nam
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleGenderChange}
                />
                Nữ
            </label>
        </div> */}
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
            {/* <div className="form-row">
        <div className="form-group">
            <label>Số căn cước công dân:</label>
            <input
                type="text"
                name="idCardNumber"
                value={formData.idCardNumber}
                onChange={handleChange}
                maxLength="12"
            />
        </div>
        <div className="form-group">
            <label>Cấp ngày, tháng, năm:</label>
            <input
                type="text"
                name="idCardIssuedDate"
                placeholder='VD 21/09/2000'
                value={formData.idCardIssuedDate}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Nơi cấp:</label>
            <input
                type="text"
                name="idCardIssuedPlace"
                value={formData.idCardIssuedPlace}
                onChange={handleChange}
            />
        </div>
    </div> */}
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

                <div className="form-row">
                    <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleSave}>
                        {updatePending ? <Spin size='small' /> : 'Lưu'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default StudenForm