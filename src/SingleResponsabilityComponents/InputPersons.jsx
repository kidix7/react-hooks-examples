import React from 'react';
import Form  from './Form';

export default ({ onSubmit }) => {

  return <>
          <div>
              <h5> Insert Person: </h5>
              <Form
                placeholder='Insert Name'
                onSubmit={onSubmit}
              />
          </div>
        </>
};
