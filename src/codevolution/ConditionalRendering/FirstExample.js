import React from 'react'


const FirstExample = () => {
    const isLoggined = false
    return (
        <div>
            {isLoggined ?
                '<div>Weclome Ruban</div>' :
                '            <div>Welcome Guest</div>'
            }
        </div>
    )
}

export default FirstExample
