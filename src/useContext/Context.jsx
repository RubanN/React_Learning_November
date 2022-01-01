import React from 'react'
import Display from './Display';

const NumberContext = React.createContext();

const Context = () => {
    return (
        <NumberContext.Provider value={42}>
        <div>
            <Display/>
            
        </div>
        </NumberContext.Provider>
    )
}

export default Context
