import React, { useState } from 'react';
import './staff-management.css';

function StaffManagement() {
  const initialUsers = [
    { id: 1, name: 'User 1', email: 'user1@example.com', address: 'Ho Chi Minh', phone: '0123456789' },
    { id: 2, name: 'User 2', email: 'user2@example.com', address: 'Ha Noi', phone: '0987654321' },
    { id: 3, name: 'User 3', email: 'user3@example.com', address: 'Da Nang', phone: '0789654321' },
  ];

  const [users, setUsers] = useState(initialUsers);

  return (
    <div className="StaffManagement">
      <h1>STAFF</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StaffManagement;
