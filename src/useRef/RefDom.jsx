import { useRef, useEffect } from 'react';

const RefDom = () => {
    const elementRef =useRef()

    useEffect(()=>{
        const divElemet= elementRef.current;
        console.log(divElemet);
    },[])
    return (
        <div ref={elementRef}>
            I'm an element
        </div>
    )
}

export default RefDom
