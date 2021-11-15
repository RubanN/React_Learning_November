import React,{useState} from 'react'

const countInitial =()=>{
    console.log("run function"); // this function runs for every single click
    return 4
}

const UseState = () => {
//  const [count,setCount] = useState(4);
//  const [count,setCount] = useState(()=>{
//      console.log("run function");
//      return 4
//  })
const [count,setCount] = useState(()=>countInitial()) // it runs only one time
// const [count,setCount] = useState(countInitial())   
const [state,setState] = useState({count:4,theme:'blue'})

const changeTheme=()=>{
    setState(prevState=>{
        return {...prevState,count:prevState.count-1}
    })
}
const decrementCount =()=>{
    setCount(x=>x-1)
    setCount(x=>x-1)
    
}
const incrementCount =()=>{
    setCount(x=>x+1)
}

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            <button onClick={changeTheme}>click</button>
        </div>
    )
}

export default UseState
