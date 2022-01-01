import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [name,setName] = useState("")

  //getUpdatestate
  //componentwill
  //componentDIdMount
    const chnageName=()=>{
        setName("hello world")
    }

    return (
         <div>
        <Child name={name}  chnageName={chnageName}/>           
        </div>
    )
}

export default Parent
