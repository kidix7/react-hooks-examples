import React, { Fragment , useState, useEffect } from 'react';
import { Payment, SelectPerson, InputPersons, PeopleDebtLogList } from './SingleResponsabilityComponents';
import { map, filter } from 'lodash';

export default () => {

  const [people, setPeople] = useState(JSON.parse(localStorage.getItem('people') || '[]'));
  const [personWhoPaied, setPersonWhoPaied] = useState("");
  const [selectedPeople, setSelectedPeople] = useState(JSON.parse(localStorage.getItem('selectedPeople') || '[]'));
  const [peopleDebts, setPeopleDebts] = useState(JSON.parse(localStorage.getItem('peopleDebts') || '[]'));
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people || []));
  }, [people]);

  useEffect(() => {
    localStorage.setItem('peopleDebts', JSON.stringify(peopleDebts || []));
  }, [peopleDebts]);

  useEffect(() => {
    localStorage.setItem('selectedPeople', JSON.stringify(selectedPeople || []));
  }, [selectedPeople]);


  const onSubmitInputPerson = function(e) {
    setPeople([e,...people]);
    setSelectedPeople([{name: e, isSelected: false}, ...selectedPeople]);
  }

  const onChangePayment = function(e) {
    let result = map(selectedPeople, person => person.name === e.target.value ? { name: e.target.value, isSelected: !person.isSelected } : person)
    setSelectedPeople(result)
  }

  const onSetNewPerson = function(e) {
    setPersonWhoPaied(people[e.target.selectedIndex]);
  }

  const onChangeSetAmount = function(e) {
    setAmount(e.target.value);
  } 
  
  const onClickSubmit = function(e) {
    // TODO: check if fields are filled 👍
    
    let result = {
      person: personWhoPaied || people[0] || '',
      peopleInvolved: filter(selectedPeople, p => p.isSelected),
      amount: amount,
    };

    let resetSelectedPeople = map(selectedPeople, person => { return { name: person.name, isSelected: false }});

    setSelectedPeople(resetSelectedPeople);
    
    setPeopleDebts([result , ...peopleDebts]);
  }

  const inputPersons = InputPersons(people, {onSubmit: onSubmitInputPerson});
  
  const selectPerson = SelectPerson(people, {onChange: onSetNewPerson});

  const payment = Payment(selectedPeople, {onChange: onChangePayment, onChangeAmount: onChangeSetAmount});

  const peoplesDebts = PeopleDebtLogList(peopleDebts);

  return (
    <Fragment>
        {inputPersons}
        {selectPerson}
        {payment}
        <input type="submit" value="Confirm" onClick={e => onClickSubmit(e)}/>

        {peoplesDebts}
    </Fragment>
  );
};
