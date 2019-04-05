import React from 'react';
import { map } from 'lodash';

export default (people, { onChange }) => {
    return <> 
        <h5> Select Person: </h5> 
        <select onChange={e => onChange(e)}>
            {map(people, person => <option value={person}> { person } </option>  )}
        </select>
    </>
}