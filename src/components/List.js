import React, { Component } from 'react';

const List = ({ usernames }) => (


      <ul>
        {usernames.map(user => <li key={user.id.date}>{user.name}</li>)}
        </ul>
    
)

export default List;
