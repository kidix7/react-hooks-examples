import React, { useState } from 'react';
import Form  from './Form';
import { map } from 'lodash';

export default (people, { onSubmit }) => {

    return <>
            <div>
                <h3> Insert Person: </h3>
                <Form
                  placeholder='Insert Name'
                  onSubmit={onSubmit}
                />
                { map(people, (val) => <p key={val}> {val} </p>) }
            </div>
          </>
  };
