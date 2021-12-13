import React,{useState} from 'react'

const UseStateBoolean = () => {
    const  [isOpen,setOpen]  = useState(false);

    return (
        <div>
           {isOpen ? "True":"False" }
           <button onClick={()=>setOpen(!isOpen)}>Click me</button>        
        </div>
    )
}

export default UseStateBoolean
