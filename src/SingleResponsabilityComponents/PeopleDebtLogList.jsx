import React, { useContext } from 'react';
import { map , isEmpty } from 'lodash';
import { PeopleDebtsContext } from '../Context';

export default () => {
    
    const peoplesDebts = useContext(PeopleDebtsContext);

    return !isEmpty(peoplesDebts) && 
    
    <table>
        <th>
            Who Paid
        </th>
        <th>
            Involved People
        </th>
        <th>
            Amount  
        </th>
                
        {map(peoplesDebts, p =>
            <tr>
                <td>
                    { p.person }
                </td>
                <td>
                    <div className="row">
                        { map(p.peopleInvolved, o => <div className="col-md-2"> {o.name} </div>) }
                    </div>
                </td>
                <td>
                    {p.amount}
                </td>
            </tr>
        )}
    </table>
    
}
