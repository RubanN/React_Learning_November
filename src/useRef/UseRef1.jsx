import { useState } from 'react';

const UseRef1 = () => {
    const [count,setCount] = useState(0)
    
    const handle =()=>{
         const updated = count+1;
         console.log(`Cliked ${updated} times`);
         setCount(updated)
    }
    console.log('I rendered!');

    return (

        <div>
            {count}
            <button onClick={handle}>click</button>
        </div>
    )
}

export default UseRef1
