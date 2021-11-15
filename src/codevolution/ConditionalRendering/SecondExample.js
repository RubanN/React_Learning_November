import React from 'react'
import ThirdExample from './ThirdExample';

const SecondExample = () => {
    const age = 21;
    const name = "ruban";
    const profession = "Soft Developer"
    return (
        <div>

            <ThirdExample age={age} name={name} profession={profession} />
        </div>
    )
}

export default SecondExample
