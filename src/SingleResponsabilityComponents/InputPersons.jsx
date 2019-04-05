import React from 'react';
import Form  from './Form';
import { map } from 'lodash';

export default (people, { onSubmit }) => {

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
