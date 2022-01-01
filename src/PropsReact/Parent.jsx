import React,{useState} from 'react'
import ReactProps from './ReactProps'

const Parent = () => {
    const [state,setState]= useState({
        name:"param",
        email:"ruban@gamil.com"
    })
    const handleChange=()=>{
        setState({
            name:"Vennnila",
            email:"vennaila@gmail.com"
        })
    }
    return (
        <div>
            <ReactProps {...state}/>
            <button onClick={handleChange}>CLick</button>
        </div>
    )
}

export default Parent
