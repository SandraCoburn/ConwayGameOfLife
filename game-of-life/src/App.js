import React, { useCallback, useState, useRef } from "react";
import produce from "immer";
import Grid from "./grid";
import Rules from "./Rules";
import PresetButtons from "./PresetButtons";
import Header from "./Header";

import "./App.css";

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
  const [gen, setGen] = useState(0);
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);
  const changeColor = (cell, generation) => {
    if (cell && generation % 5 === 0) {
      return "teal";
    } else if (cell) {
      return "#a2272d";
    } else {
      return undefined;
    }
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
    setGen((prevGen) => {
      return prevGen + 1;
    });
    setTimeout(runSimulation, 500);
  }, []);

  //Generate random
  const generateRandom = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.6 ? 1 : 0))
      );
    }
    setGrid(rows);
    setGen((prevGen) => {
      return prevGen + 1;
    });
  };

  // const gliderGun = () => {
  //     const rows = [];
  //     for (let i = 0; i < numRows; i++) {
  //       rows.push(
  //         Array.from(Array(numCols), () => )
  //       );
  //     }

  //     setGrid(rows);
  //     setGen((prevGen) => {
  //       return prevGen + 1;
  //     });
  // }
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
      <Header />

      <section className="components">
        <Grid
          grid={grid}
          setGrid={setGrid}
          numCols={numCols}
          numRows={numRows}
          changeColor={changeColor}
          gen={gen}
          running={running}
        />
        <PresetButtons
          running={running}
          setRunning={setRunning}
          runSimulation={runSimulation}
          runningRef={runningRef}
          generateEmptyGrid={generateEmptyGrid}
          setGrid={setGrid}
          generateRandom={generateRandom}
          setGen={setGen}
          gen={gen}
          manualSimulation={manualSimulation}
        />
        <Rules />
      </section>
    </div>
  );
}

export default App;
