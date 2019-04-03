import { useState } from 'react';

// Hook useInputValue
// Returns value, onChange(), and resetValue()
export default (initialValue) => 
{
    const [value, setValue] = useState(initialValue);
    
    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue("")
    };
}