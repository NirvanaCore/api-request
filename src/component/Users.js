import React from 'react';

export default function Users({users}) {
  return (
    <div className = 'card'>
        <img src={users.picture.large} alt=""/>
    <div className = 'card-body'>
    <h1>{users.name.first} {users.name.last}</h1>
    <ul>
      <li>{users.email}</li>
      <li>{users.phone}</li>
      <li>{users.location.city}</li>
    </ul>
    </div>
    </div>
  );
}
