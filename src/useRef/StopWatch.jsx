import { useRef, useState, useEffect } from 'react';

const StopWatch = () => {
    const timeIdRef = useRef(0)
    const [count,setCount] =  useState(0)

    const startHandler=()=>{
        if(timeIdRef.current){return};
        timeIdRef.current = setInterval(()=>setCount(c=>c+1),1000)
    }
    const stopHandler=()=>{
        clearInterval(timeIdRef.current);
        timeIdRef.current =0
    }
    useEffect(()=>{
        return (()=>clearInterval(timeIdRef.current))
    },[])
    return (
        <div>
            <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
        </div>
    )
}

export default StopWatch
