import React, { useContext } from "react";
import { map } from 'lodash';
import { SelectedPeopleContext } from "../Context";

export default ({onChange, onChangeAmount}) => {
   
  const selectedPeople = useContext(SelectedPeopleContext);

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
