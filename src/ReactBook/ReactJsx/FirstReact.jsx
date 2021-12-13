import React,{useEffect,useState} from 'react'

const FirstReact = () => {
  const [count,setCount] = useState(1);

  useEffect(() => {
     console.log('render')
    
  },[count])
  return (
    <div>
      <div>{count}</div>
    </div>
  )
}

export default FirstReact
