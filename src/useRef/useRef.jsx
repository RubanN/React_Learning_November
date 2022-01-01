import { useRef } from 'react';

const Ref = () => {
    const countRef =useRef(0);
    const handle =()=>{
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`)
    }
    console.log("I Rendered")
    return <button onClick={handle}>Click me </button>
}

export default Ref
