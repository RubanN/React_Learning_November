import React ,{useState}from 'react'

const UserDetailsComponent = () => {
    // var [userDetails, setUserDetails] = useState({
    //     name: "Mayank",
    //     age: 30
    //   });
    return (
        <div>
             <h1>This is the Parent Component</h1><hr/>
      {/* <ChildComponent userDetails={userDetails}></ChildComponent> */}
        </div>
    )
}

// const ChildComponent=({userDetails})=>{
//     return(
//         <div>
//             <h2>This  is child component</h2>
//             {/* {userDetails.name} */}
//         </div>
//     )
// }

export default UserDetailsComponent
