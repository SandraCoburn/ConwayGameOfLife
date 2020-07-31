import React, { useCallback, useState, useRef } from "react";
import { Link, Route } from "react-router-dom";
import produce from "immer";
import Home from "./Home";
import About from "./about";
import { generateEmptyGrid, operations } from "./GameGrid.util";

import "./App.css";
const numRows = 25;
const numCols = 25;
function App() {
  const [running, setRunning] = useState(false);
  const [gen, setGen] = useState(0);
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

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
    setGen((prevGen) => {
      return prevGen + 1;
    });
    setTimeout(runSimulation, 500);
  }, []);

  const manualSimulation = () => {
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
    setGen((prevGen) => {
      return prevGen + 1;
    });
  };

  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link exact to="/">
            Conway's Game of Life
          </Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <div>
        <Route exact path="/about" component={About} />
      </div>
      <Route exact path="/">
        <Home
          grid={grid}
          setGen={setGen}
          setGrid={setGrid}
          numCols={numCols}
          numRows={numRows}
          gen={gen}
          running={running}
          setRunning={setRunning}
          manualSimulation={manualSimulation}
          runningRef={runningRef}
          runSimulation={runSimulation}
        />
      </Route>
    </div>
  );
}

export default App;
