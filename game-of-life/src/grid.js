import React from "react";
//used immer package to help with immutable state https://immerjs.github.io/immer/docs/introduction
import produce from "immer";
import { changeColor } from "./GameGrid.util";

const Grid = ({ grid, setGrid, numCols, gen, running, numRows }) => {
  return (
    <>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 18px)`,
        }}
      >
        {grid.map((rows, index) =>
          rows.map((col, idx) => (
            <div
              key={`${index}-${idx}`}
              onClick={(e) => {
                if (!running) {
                  console.log("i clicked", index, idx);
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[index][idx] = grid[index][idx] ? 0 : 1;
                  });
                  setGrid(newGrid);
                  console.log(grid);
                } else {
                  e.preventDefault();
                }
              }}
              style={{
                width: 16,
                height: 16,
                //background: grid[index][idx] ? "#a2272d" : undefined,
                background: changeColor(grid[index][idx], gen),
                border: "solid 1px white",
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Grid;
