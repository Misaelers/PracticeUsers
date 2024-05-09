import React from 'react';
 
const UserCounter = ({ users }) => {
  const userCount = users.length;
 
  return (
<div>
<h2>Total Usuarios: {userCount}</h2>
</div>
  );
};
 export default UserCounter;