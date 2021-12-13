import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button >Count-{count}</button>
        </div>
    )
}