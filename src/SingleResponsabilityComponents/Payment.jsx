import React, { useContext } from "react";
import { map } from 'lodash';
import { SelectedPeopleContext } from "../Context";

export default ({onChange, onChangeAmount}) => {
   
  const selectedPeople = useContext(SelectedPeopleContext);

  return <> <h5> Select People: </h5>
          <div className="row">
          { map(selectedPeople, (val) => <>
                <div className="col-4">
                  <input 
                    required
                    type='button' 
                    key={`chbox-${val}`} 
                    className={`btn-block ${val.isSelected ? 'btn-dark' : '' }`} 
                    onClick={e => onChange(e)}
                    value={val.name}
                    /> 
                  </div>
            </> )}

            </div>
            <h5> Insert amount: </h5>
            <input type="number" onChange={e => onChangeAmount(e)}/>
      </>;
};
