import React from "react";
import Grid from "./grid";
import PresetButtons from "./PresetButtons";
import Rules from "./Rules";
import "./App.css";

const Home = ({
  grid,
  setGrid,
  numCols,
  numRows,
  gen,
  running,
  setRunning,
  manualSimulation,
  runSimulation,
  runningRef,
  setGen,
}) => {
  return (
    <section className="components">
      <Grid
        grid={grid}
        setGrid={setGrid}
        numCols={numCols}
        numRows={numRows}
        gen={gen}
        running={running}
      />

      <PresetButtons
        running={running}
        setRunning={setRunning}
        runSimulation={runSimulation}
        runningRef={runningRef}
        setGrid={setGrid}
        setGen={setGen}
        gen={gen}
        manualSimulation={manualSimulation}
      />
      <Rules />
    </section>
  );
};
export default Home;
