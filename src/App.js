import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import _ from 'lodash';

export default () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [people, setPeople] = useState([]);
  const [debts, setDebts] = useState([]);
  const [peopleSelected, setPeopleSelected] = useState([]);

 
  const InputPersons = () => (
      <div>
        <div>
          <h3> Insert Person: </h3>
          <Form
              placeholder='Insert Name'
              value={name}
              onChange={e => setName(e.target.value)} 
              onSubmit={e => {
                setPeople([e,...people])
                setPeopleSelected([{e, isSelected: false} ,...peopleSelected])}
              }
            />
        </div>
      <div>
        {people.map(x => <p key={x}> {x} </p> )}
      </div>
    </div>
    );

  const Payment = () => (
    <div>
      <h3> Select who paid: </h3>
      <select>
        {people.map(p => <option value={p}> {p} </option>)}
      </select>

      <h3> Amount to Pay: </h3>
      <input 
        onChange={e => {
            e.preventDefault();
            e.stopPropagation();
            setAmount(e.target.value);
          } 
        }
        value={amount} 
      />

      <h3>Involved people</h3>
      {/* Pay 2 who? */}
      <div>
        {people.map(p => <div> <input type='checkbox' name='payPeople' value={p} /> {p} </div>)}
      </div>

      <h3>Submit</h3>
      <input type='button' onClick={e => setDebts([parseDebt(...peopleSelected,amount),...debts])} />
    </div>
  );

  function parseDebt(peopleSelected,amount) {
      var checkedPeople = peopleSelected.map(p => p.isSelected);
  }

  function changePersonState(e) {

    let newPeople = _.map(peopleSelected, function(value) {

      console.log(e.target.value);
        if(value === e.target.value) {
          value.isSelected = true;
        }
        else {
          value.isSelected = false;
        }
        return value;
    });

    console.log({people: newPeople});
    return newPeople;

  }

  const DebtList = () => (
      <div>
        
      </div>
  );

  return (
    <div>
      <InputPersons />
      <Payment />
    </div>
  );
};