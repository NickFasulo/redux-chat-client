import React from 'react';

const ActiveUsers = ({ users }) => (
  <aside className="sidebar">
    <div className="img">
      <img className="logo" src="./henlo-logo2.png" alt="..."></img>
    </div>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
);

export default ActiveUsers;
