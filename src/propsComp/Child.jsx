import React,{useEffect} from 'react'

const Child = props => {
    const {name,chnageName} = props
    console.log("Valuesssss---->",props)
      // componentDIdUpdate

    useEffect(()=>{
      console.log("force update",name)
    },[name])
    return (
//   render
    <div>
            <strong>{name}</strong>
            <button onClick={chnageName}>Click</button>
        </div>
    )
}
export default Child
