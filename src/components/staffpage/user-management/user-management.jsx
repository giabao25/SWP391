import React, { useState } from 'react';
import useGetUser from '../../../apis/user/useGetUser';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import AddUser from './AddUser';
import './user.css'
function UserManagement() {
    const { data, isLoading } = useGetUser()

    const [add, toggleAdd] = useState(false)
    return (
        <div className="UserManagement">
            <h1> QUẢN LÝ HỌC VIÊN</h1>
            <Button onClick={() => toggleAdd(!add)} className='icon-add0-user' style={{ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <FontAwesomeIcon icon={faUserPlus} />
                <span className='user'>{add ? 'Quay về' : 'Thêm'}</span>
            </Button>
            {add ? <AddUser /> :
                <>
                    {isLoading ? 'Loading...' :
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((user) => (
                                    <tr key={user.studentId}>
                                        <td>{user.studentName}</td>
                                        <td>{user.roleId}</td>
                                        <td>{user.studentId}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </>
            }


        </div>
    )
}

export default UserManagement

