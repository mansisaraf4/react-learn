import React from "react"

const UserInput = (props) =>{
    return(
        <input 
            type="text" 
            placeholder="Enter text here" 
            onChange={props.change}
            value={props.name}
        />
    )
}
export default UserInput