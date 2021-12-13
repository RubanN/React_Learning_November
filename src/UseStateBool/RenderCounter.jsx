import React,{useState,useEffect} from 'react'

const RenderCounter = () => {
  const [isLoading,setisLoading] = useState(false)
  const buttonHandler =()=>{
 setisLoading(c=>!c)
}
useEffect(()=>{
    console.log(isLoading);
},[isLoading])
    return (
        <div>
            <button onClick={buttonHandler}>change</button>
            {isLoading ? "Loading....":null}
        </div>
    )
}

export default RenderCounter
