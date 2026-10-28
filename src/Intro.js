import React, { useState } from 'react';

const Intro = () => {

    const [user, setUser] = useState({
        name: 'Mubeen',
        age: 10,
        address: 'Lahore',
        role: 'IT',
    });

    if(user=== null){
        return <h1>Loading...</h1>
    }

  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <h3>{user.address}</h3>
        <h4>{user.role}</h4>
        {user.age > 20 && <p>Eligible for driving</p>}
        {user.age >= 18 ? <p>Eligible to vote</p> : <p>Not Eligible to vote</p>}
    </div>
  );
};

export default Intro;