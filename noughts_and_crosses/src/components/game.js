import React, { useState } from "react";
import getWinner from "./getWinner";
import Grid from "./grid";

const Game = () => {
    const [grid, setGrid] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const winner = getWinner(grid);
    const currentPlayer = isXTurn ? "X" : "O";

    const handleClick = (i) => {
    const boardCopy = [...grid];
	// If user click an occupied square or if game is won, return
	if (winner || boardCopy[i]) return;
	// Put an X or an O in the clicked square
	boardCopy[i] = isXTurn ? "X" : "O";
	setGrid(boardCopy);
	setIsXTurn(!isXTurn);
    };


    return (
    <>
        <Grid squares={grid} onClick={handleClick}/>
        <div className="infos">
            <h3>
             {winner ? "winner: " + winner : "Next Player: " + currentPlayer}
            </h3>
        </div>
    </>
    );
};
export default Game;