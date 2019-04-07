import React from "react";
import { map } from 'lodash';

export default (selectedPeople, {onChange, onChangeAmount}) => {
   
  return <> <h5> Select People: </h5>
          { map(selectedPeople, (val) => <>
              <input 
                required
                type='checkbox' 
                key={`chbox-${val}`} 
                checked={val.isSelected} 
                onChange={e => onChange(e)}
                value={val.name}
                /> 
                  {val.name} 
            </> )}

            <h5> Insert amount: </h5>
            <input type="number" onChange={e => onChangeAmount(e)}/>
      </>;
};
