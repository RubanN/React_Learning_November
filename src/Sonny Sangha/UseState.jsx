import React,{useState} from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)
    const [change,setChange] = useState(false)
    const decrementCount =()=>{
        setCount(count+1)
    }
    const incrementCount =()=>{
        setCount(count-1)
    }
    return (
        <div>
            <h1>Welcome to my counter app</h1>
            <h1>The count is :{count}</h1>
            
              <button onClick={decrementCount}>-</button>
              <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default UseState
