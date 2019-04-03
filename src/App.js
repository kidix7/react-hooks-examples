import React, { Fragment , useState , useMemo } from "react";
import "./App.css";
import _ from 'lodash';
import InputPersons from "./InputPersons";
import Payment from "./Payment";

export default () => {

  const [people, setPeople] = useState([]);

  const onSubmit = function(e) {
    setPeople([e,...people]);
  }

  const inputPersons = useMemo(() => InputPersons(people, {onSubmit}) , [people])

  return (
    <Fragment>
        {inputPersons}
        <Payment />
    </Fragment>
  );
};

