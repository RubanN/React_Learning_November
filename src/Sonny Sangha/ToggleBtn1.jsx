import React,{useState} from 'react'

const ToggleBtn1 = () => {
    const [show,setShow] = useState(false)
   const handleClick = () =>{
       setShow(s=>!s)
   }
    return (
        <div>
            <div>Show:{String(show)}</div>
            <button onClick={handleClick}>BTN</button>
        </div>
    )
}

export default ToggleBtn1
