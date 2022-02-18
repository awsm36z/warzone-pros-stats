import { useEffect, useState } from "react";

const TitleCard = () => {
    const[text,setText] = useState();
    
    useEffect(()=>{
        (text != props.text) ? (setText(props.text)) : console.log("text is already set")
    },[text])
    return ( 
    <div className="titlecard">
        <h1 className="text">
            {text}
        </h1>
    </div> );
}
 
export default TitleCard;