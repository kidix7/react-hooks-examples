import React, { useState, useEffect } from 'react';
import { map } from 'lodash';

export default () => {

    const [users, setUsers] = useState([]);

    useEffect(() =>{ async function getUsers(){
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let users = await res.json();
      setUsers(users);
    }
      getUsers()
    }, [])

  return( 
    <>
        <ul className='list-group'>
          {map(users, u => 
            <li key={u.id} className='list-group-item'>
              {u.name}
            </li>   
          )}
        </ul>  
    </>
  )
};
