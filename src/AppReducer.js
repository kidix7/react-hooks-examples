import React, { useReducer, useEffect } from 'react';
import { map } from 'lodash';

function userReducer(state, action) {
  switch(action.type) {
    case "fetchData":
      return action.data;
    default:
      return state;
  }
}

export default () => {

    const [state, dispatch] = useReducer(userReducer, []);

    useEffect(() =>{ async function getUsers(){
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let users = await res.json();
      dispatch({type:"fetchData", data:users});
    }
      getUsers()
    }, [])

  return( 
    <>
        <h2> Using Reducer </h2>
        <ul className='list-group'>
          {map(state, u => 
            <li key={u.id} className='list-group-item'>
              {u.name}
            </li>   
          )}
        </ul>  
    </>
  )
};
