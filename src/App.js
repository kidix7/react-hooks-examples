import "./App.css";
import React, { Fragment , useState , useMemo } from "react";
import InputPersons from "./InputPersons";
import Payment from "./Payment";
import _ from 'lodash';

export default () => {

  const [people, setPeople] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);

  const onSubmit = function(e) {
    setPeople([e,...people]);
    setSelectedPeople([{name: e, isSelected: false}, ...selectedPeople]);
  }

  const onChange = function(e) {
    
    let result = _.map(selectedPeople, item => item.name === e.target.value ? { name: e.target.value, isSelected: !item.isSelected } : item)
    
    setSelectedPeople(result)
  }

  const inputPersons = useMemo(() => InputPersons(people, {onSubmit}) , [people]);

  const payment = useMemo(() => Payment(selectedPeople, {onChange}));

  return (
    <Fragment>
        {inputPersons}
        {payment}
    </Fragment>
  );
};

