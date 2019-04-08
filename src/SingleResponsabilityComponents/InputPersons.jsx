import React, { useContext } from 'react';
import Form  from './Form';
import { map } from 'lodash';
import { PeopleContext } from '../Context';

export default ({ onSubmit }) => {

  const people = useContext(PeopleContext);

  return <>
          <div>
              <h5> Insert Person: </h5>
              <Form
                placeholder='Insert Name'
                onSubmit={onSubmit}
              />
              { map(people, (val) => <p key={val}> {val} </p>) }
          </div>
        </>
};
