import React, { useState } from 'react';
import './studentprofile.css';

function StudentProfile() {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: 'male',
        permanentAddress: '',
        idCardNumber: '',
        idCardIssuedDate: '',
        idCardIssuedPlace: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber' || name === 'idCardNumber') {
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

    const handleGenderChange = (e) => {
        setFormData({
            ...formData,
            gender: e.target.value,
        });
    };

    const handleSave = () => {
        // Đưa dữ liệu đã nhập vào đây để xử lý lưu trữ hoặc gửi đi.
        console.log(formData);
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
                <div className="form-group">
                    <label>Ngày Tháng Năm Sinh:</label>
                    <input
                        type="text"
                        name="dateOfBirth"
                        placeholder='VD 21/09/2000'
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
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
                </div>
            </div>
            <div className="form-group">
                <label>Địa chỉ thường trú:</label>
                <input
                    type="text"
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Số căn cước công dân:</label>
                    <input
                        type="text"
                        name="idCardNumber"
                        value={formData.idCardNumber}
                        onChange={handleChange}
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
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Số điện thoại:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        maxLength="10"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <button onClick={handleSave}>
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;
