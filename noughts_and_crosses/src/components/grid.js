import Square from "./square";
import React from "react";
import 



const Grid = ({squares, onClick}) => {
    return (
        <div className="grid">
        <Square value="1" onClick={() => onClick("null")}/>
        <Square value="2" onClick={() => onClick("null")}/>
        <Square value="3" onClick={() => onClick("null")}/>
        <Square value="4" onClick={() => onClick("null")}/>
        <Square value="4" onClick={() => onClick("null")}/>
        <Square value="5" onClick={() => onClick("null")}/>
        <Square value="6" onClick={() => onClick("null")}/>
        <Square value="7" onClick={() => onClick("null")}/>
        <Square value="8" onClick={() => onClick("null")}/>
        <Square value="9" onClick={() => onClick("null")}/>
        </div>
    )


export default Grid;


// {squares.map((square, index)=>(
//     <Square
//     key={index}
//     value={square}
//     onClick={()=> onClick(index)}
//     />