import { useRef, useEffect } from 'react';

const Focusing = () => {
const inputRef = useRef();
 
useEffect(() =>{
    inputRef.current.focus()
},[])
    return (
        <div>
          <input ref={inputRef} type="text"/>
        </div>
    )
}

export default Focusing
