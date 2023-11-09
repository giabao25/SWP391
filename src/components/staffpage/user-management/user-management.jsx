import React, { useState } from 'react';
import useGetUser from '../../../apis/user/useGetUser';
import { Button } from 'antd';

function UserManagement() {
    const { data, isLoading } = useGetUser()
    return (
        <div className="StaffManagement">
            <h1>USER</h1>
            {isLoading ? 'Loading...' :
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((user) => (
                            <tr key={user.studentId}>
                                <td>{user.studentName}</td>
                                <td>{user.roleId}</td>
                                <td>{user.studentId}</td>
                                <td>{user.address}</td>
                                <td>
                                    <Button>Update</Button>
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }

        </div>
    )
}

export default UserManagement

