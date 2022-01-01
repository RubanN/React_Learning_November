import {useState,  useEffect, useRef } from "react";

const W3Schools = () => {
    const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
    return (
        <div>
            <input 
              type="text"
              value={inputValue}
              onChange={(e)=>setInputValue(e.target.value)}
            />
            <h1>Render count:{count.current}</h1>
        </div>
    )
}

export default W3Schools
