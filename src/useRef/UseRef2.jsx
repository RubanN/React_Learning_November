import React,{useRef} from 'react'

const UseRef2 = () => {
    const inputRef = useRef(0);
    const handleChange=()=>{
        inputRef.current ++
        console.log(`Clicked ${inputRef.current} times`)

    }
    
    return  <button onClick={handleChange}>click</button>        
    
    
}

export default UseRef2
