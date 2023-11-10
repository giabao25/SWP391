import React from 'react';
import { useSelector } from 'react-redux';
import useGetUserById from '../../apis/user/useGetUserById';
import StudenForm from './StudenForm';
import './studentprofile.css';
import { Spin } from 'antd';

function StudentProfile() {

    const { email, password } = useSelector(state => state.user)

    const { data } = useGetUserById(email)

    if (!data) {

        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Spin />
        </div>
    }

    return (
        <StudenForm data={data} password={password} />
    );
}

export default StudentProfile;
