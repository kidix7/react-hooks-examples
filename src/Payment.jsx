import React, { useState , Fragment} from "react";
import  map  from 'lodash/map';

function Payment ({ onSubmit }, people) {
    
    const [amount, setAmount] = useState(0);

    function wrapInCheckbox(obj) {
      return (<Fragment> <input type="checkbox" key={obj} /> {obj} </Fragment> )
    }

    return (
    <div>
      <form>
        <h3> Select People: </h3>
        <select>
          { map(people,(p) => <option value={p}> {p} </option> ) }
          </select>

          <h3>Involved people</h3>
          {/* Pay 2 who? */}
          { map(people, wrapInCheckbox) }

        <h3> Amount: </h3>
          <input 
            type="number" 
            value={amount} 
            onChange={e => setAmount(e.target.value)} 
          />

        <h3>Submit</h3>
        <input type='submit' 
          onClick={e =>{
            e.preventDefault();
            onSubmit(amount);
          }} 
        />

      </form>
    </div>
  )};

export default Payment;