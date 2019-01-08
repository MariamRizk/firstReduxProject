import React, { Component } from "react";

const List = ({ usernames }) => {
  if (usernames) {
    return (
      <ul>
        {usernames.map(user => (
          <li key={user.id.date}>{user.name}</li>
        ))}
      </ul>
    );
  } else return null;
};

export default List;
