import React, { useState } from "react";
import produce from "immer";

const numRows = 35;
const numCols = 35;

const Grid = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      //initialize values with zeros
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });
  console.log(grid);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 20px)`,
      }}
    >
      {grid.map((rows, index) =>
        rows.map((col, idx) => (
          <div
            key={`${index}-${idx}`}
            onClick={() => {
              const newGrid = produce(grid, (gridCopy) => {
                gridCopy[index][idx] = grid[index][idx] ? 0 : 1;
              });
              setGrid(newGrid);
            }}
            style={{
              width: 20,
              height: 20,
              background: grid[index][idx] ? "pink" : undefined,
              border: "solid 1px black",
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
