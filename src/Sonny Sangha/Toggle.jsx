import React,{useState} from 'react'

const Toggle = () => {
    const [isOn,setIsOn] = useState(false)
    return (
        <div>
        {isOn ? "The light is On":"Hey who turned the off"}
        <button type="button" onClick={setIsOn}>Press me</button>            
        </div>
    )
}

export default Toggle
