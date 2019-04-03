import React, { Fragment } from "react";
import "./App.css";
import _ from 'lodash';
import InputPersons from "./InputPersons";
import Payment from "./Payment";

export default () => {

  return (
    <Fragment>
        <InputPersons />
        <Payment />
    </Fragment>
  );
};