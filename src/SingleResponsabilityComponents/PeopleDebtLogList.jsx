import React from 'react';
import { map } from 'lodash';

export default (peoplesDebts) => {
    
    return peoplesDebts && 
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
            <div className= "row">
                <div className="col-md-3">
                    { peoplesDebts.person }
                </div>
                <div className="col-md-3">
                    <div className="row">
                        { map(peoplesDebts.peopleInvolved, o => <div className="col-md-2"> {o.name} </div>) }
                    </div>
                </div>
                <div className="col-md-3">
                    {peoplesDebts.amount}
                </div>
            </div>
        </div>
}
