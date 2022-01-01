import React,{useState,useEffect} from 'react'

const ReactProps = props => {
 const [profileState,setProfileState] = useState(props)
 console.log("profileState",props)
 useEffect(()=>{
     setProfileState(props)
 },[props])
    return (
        <div>
            <p>
                <strong>Name:</strong>
                 {profileState.name}
            </p>
            <p>
                <strong>Email:</strong>
                {profileState.email}
            </p>
        </div>
    )
}

export default ReactProps
