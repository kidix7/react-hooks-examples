import React, { useContext } from 'react';
import { map , isEmpty } from 'lodash';
import { PeopleDebtsContext } from '../Context';

export default () => {
    
    const peoplesDebts = useContext(PeopleDebtsContext);

    return !isEmpty(peoplesDebts) && 
    
    <div className="">
                <div className= "row">
                    <div className="col-md-3">
                        Who Paied
                    </div>
                    <div className="col-md-3">
                        Involved People
                    </div>
                    <div className="col-md-3">
                        Amount  
                    </div>
                </div>
                
        {map(peoplesDebts, p =>
                <div className= "row">
                    <div className="col-md-3">
                        { p.person }
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            { map(p.peopleInvolved, o => <div className="col-md-2"> {o.name} </div>) }
                        </div>
                    </div>
                    <div className="col-md-3">
                        {p.amount}
                    </div>
                </div>
        )}
    </div>
    
}
