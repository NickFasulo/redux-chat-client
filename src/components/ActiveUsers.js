import React from 'react';

const ActiveUsers = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
);

export default ActiveUsers;
