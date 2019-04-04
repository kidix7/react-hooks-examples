import React, { useState , Fragment} from "react";
import { map } from 'lodash';

export default (selectedPeople, {onChange}) => {
   
  return <> Select People:
          { map(selectedPeople, (val) => <>
              <input 
                type='checkbox' 
                key={`chbox-${val}`} 
                checked={val.isSelected} 
                onChange={e => onChange(e)}
                value={val.name}
                /> 
                  {val.name} 
            </> )}



      </>;

};
