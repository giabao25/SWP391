import React from 'react';
import { useSelector } from 'react-redux';
import useGetUserById from '../../apis/user/useGetUserById';
import StudenForm from './StudenForm';
import './studentprofile.css';

function StudentProfile() {

    const { email, password } = useSelector(state => state.user)

    const { data } = useGetUserById(email)

    if (!data) {
        return 'Loading...'
    }

    return (
        <StudenForm data={data} password={password} />
    );
}

export default StudentProfile;
