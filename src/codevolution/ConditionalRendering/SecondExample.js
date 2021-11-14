import React from 'react'
import ThirdExample from './ThirdExample';

const SecondExample = () => {
    const age = 21;
    const name = "ruban";
    const profession = "Soft Developer"
    return (
        <div>
            {/* {employees && employees.length > 0 && (
                <div>
                    <h1>employees list</h1>
                    {employees.map((employee) => (
                        <h5>{employee}</h5>
                    ))}
                </div>
            )} */}
            <ThirdExample age={age} name={name} profession={profession} />
        </div>
    )
}

export default SecondExample
