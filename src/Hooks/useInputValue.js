import { useState } from 'react';

// Hook useInputValue
// Returns value, onChange(), and resetValue()
export default (initialValue) => 
{
    const [value, setValue] = useState(initialValue);
    const initVal = initialValue;

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue(initVal)
    };
}