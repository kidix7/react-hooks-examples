import React, { Fragment , useState, useEffect } from 'react';
import { Payment, SelectPerson, InputPersons, PeopleDebtLogList } from './SingleResponsabilityComponents';
import { map, filter } from 'lodash';
import { PeopleContext, SelectedPeopleContext, PeopleDebtsContext} from './Context';


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
    let result = {
      person: personWhoPaied || people[0] || '',
      peopleInvolved: filter(selectedPeople, p => p.isSelected),
      amount: amount,
    };

    let resetSelectedPeople = map(selectedPeople, person => { return { name: person.name, isSelected: false }});

    setSelectedPeople(resetSelectedPeople);
    
    setPeopleDebts([result , ...peopleDebts]);
  }

  return (
    <Fragment>
      <PeopleContext.Provider value={people}>
            <InputPersons onSubmit={onSubmitInputPerson} />
            <SelectPerson onChange={onSetNewPerson} />
            <SelectedPeopleContext.Provider value={selectedPeople}>
              <Payment onChange={onChangePayment} onChangeAmount={onChangeSetAmount} />
            </SelectedPeopleContext.Provider>

            <input type="submit" value="Confirm" onClick={e => onClickSubmit(e)}/>
          <PeopleDebtsContext.Provider value={peopleDebts} >
            <PeopleDebtLogList />
          </PeopleDebtsContext.Provider>
      </PeopleContext.Provider>
    </Fragment>
  );
};
