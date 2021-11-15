import React,{useState,useEffect} from 'react'

const ToggleBtn = () => {
    const [toggle,setToggle] = useState(false)

    useEffect(()=>{
// console.log("run function");
setToggle(true)
    },[])
    return (
        <div>
            
            <button onClick={()=>setToggle(!toggle)}>Toggle State</button>
        </div>
    )
}

export default ToggleBtn
