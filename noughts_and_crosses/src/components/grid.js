import Square from "./square";
import React from "react";





const Grid = ({squares, onClick}) => (
    <div className="grid">
    {squares.map((square, index) => (
    <Square key={index} value={square} onClick={() => onClick(index)}/>     
    ))}   
    </div>
);


export default Grid;


// {squares.map((square, index)=>(
//     <Square
//     key={index}
//     value={square}
//     onClick={()=> onClick(index)}
//     />