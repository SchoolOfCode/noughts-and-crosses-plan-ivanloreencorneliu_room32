import React, { useState } from "react";
import getWinner from "./getWinner";
import Grid from "./grid";

const Game = () => {
    const [grid, setGrid] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const winner = getWinner(grid);
    const currentPlayer = isXTurn ? "X" : "O";

    const handleClick = (index) => {
        if (winner || grid[index]) {
            return;
        }

        setGrid([
        ...grid.slice(0, index),
        currentPlayer,
        ...grid.slice(index + 1)
        ]);
        setIsXTurn(!isXTurn)
    };

    return (
    <>
        <Grid squares={grid} onClick={handleClick}/>
        <div className="infos">
            <h3>
                {winner ? "winner: " + winner : "Next Playe " + currentPlayer}
            </h3>
        </div>
    </>
    );
};
export default Game