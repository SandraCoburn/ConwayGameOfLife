import React, { useCallback, useState, useRef } from "react";

import Grid from "./grid";
import Rules from "./Rules";
import Preset from "./Preset";
import "./App.css";
import produce from "immer";

const numRows = 40;
const numCols = 40;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

//Clear the grid
const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    //initialize values with zeros
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

function App() {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });
  //console.log(grid);
  const [running, setRunning] = useState(false);

  //Generate random
  const generateRandom = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.5 ? 1 : 0))
      );
    }
    setGrid(rows);
  };

  //if running values changes but runSimulation doesn't, it won't update value. Use ref to fix
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    //simulation
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              //Check we are not out of boundaries
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });
            //This covers the underpopulated cell rule
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(runSimulation, 500);
  }, []);

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <section className="components">
        <Grid
          grid={grid}
          setGrid={setGrid}
          numCols={numCols}
          numRows={numRows}
        />
        <Preset
          running={running}
          setRunning={setRunning}
          runSimulation={runSimulation}
          runningRef={runningRef}
          generateEmptyGrid={generateEmptyGrid}
          setGrid={setGrid}
          generateRandom={generateRandom}
        />
        <Rules />
      </section>
    </div>
  );
}

export default App;
