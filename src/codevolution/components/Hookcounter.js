import React, { useState, useEffect } from 'react'

const Hookcounter = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    useEffect(() => {
        console.log("component did updated");
    }, [])
    console.log("Rendered");
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </div>
    )
}

export default Hookcounter
