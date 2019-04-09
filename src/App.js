import React from 'react';
import { map } from 'lodash';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async getUsers() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    this.setState({users: users});
  }

  componentWillMount() {
    this.getUsers();
  }

  render(){
    return( 
      <div>
          <ul className='list-group'>
            {map(this.state.users, u => 
              <li className='list-group-item'>
                {u.name}
              </li>   
            )}
         </ul>  
      </div>
    )
  }

};

export default App;
