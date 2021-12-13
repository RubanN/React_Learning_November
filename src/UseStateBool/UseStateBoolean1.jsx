import React,{useState} from 'react'
import { Switch } from "antd"

const UseStateBoolean1 = () => {
    const [toggle,setToggle] = useState(false)
    const toggler = ()=>{
        toggle ? setToggle(false) : setToggle(true)
    }
    return (
        <div>
            <Switch onClick={toggler}/>
        </div>
    )
}

export default UseStateBoolean1
