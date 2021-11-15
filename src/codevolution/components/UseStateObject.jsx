import React,{useState} from 'react'

const UseStateObject = () => {
    const [name,setName] = useState({firstName:'',lastName:''}) // name.firstName || name.lastName
    const handleChange=(e)=>{
        // setName(e.target.value);
        console.log('e.target.value-------------------->',e.target.value);
     e.preventDefault();
    }
    return (
        <form onSubmit={handleChange}>
                 <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
                 <input type="text" value={name.lastName}  onChange={e=>setName({...name,lastName:e.target.value})}/> 
                 <button type="submit">submit</button>
                 <h4>your firstname is -{name.firstName}</h4>  
                 <h4>your lastname is {name.lastName}</h4>    
                  <h2>{JSON.stringify(name)}
 </h2>       </form>
              )
}

export default UseStateObject
