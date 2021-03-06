import React from "react"

const CharComponent = (props) => {
    const style = {
        display: "inline-block", padding: "16px", textAlign: "center", margin: "16px", border: "1px solid black"
    }
    return(
        <button onClick={props.clicked} style={style} >{props.char}</button>
    )
}
export default CharComponent