import React from 'react';


function Keypad() {
    return (
        <input type="password" name="change" onChange={() => { console.log('Entering password...'); }} />
    )
}

export default Keypad