import React, { useContext } from 'react';
import { map } from 'lodash';
import { PeopleContext } from '../Context';

export default ({ onChange }) => {

    const people = useContext(PeopleContext);

    return <> 
        <h5> Select Person: </h5> 
        <select onChange={e => onChange(e)}>
            {map(people, person => <option value={person}> { person } </option>  )}
        </select>
    </>
}