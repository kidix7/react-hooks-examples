import React, { useState } from 'react';
import Form  from './Form';
import { map } from 'lodash';

export default () => {

    const [people, setPeople] = useState([]);
    
    return <>
            <div>
                <h3> Insert Person: </h3>
                <Form
                  placeholder='Insert Name'
                  onSubmit={e => setPeople([e,...people])}
                />
                { map(people, (val) => <p key={val}> {val} </p>) }
            </div>
          </>
  };
