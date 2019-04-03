import React, { useState , Fragment} from "react";
import { map } from 'lodash';

export default (people) => {
   
  return <>
          { map(people, (val) => 
            <>
              <input type='checkbox' key={val} /> {val} 
            </>
          )}
      </>;

};