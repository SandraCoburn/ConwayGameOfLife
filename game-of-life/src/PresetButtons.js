import React from "react";
import {
  generateRandom,
  generatePreset,
  generateEmptyGrid,
} from "./GameGrid.util";

const blinker = [
  { row: 1, col: 1 },
  { row: 1, col: 2 },
  { row: 1, col: 3 },
  { row: 20, col: 1 },
  { row: 20, col: 2 },
  { row: 20, col: 3 },

  { row: 5, col: 18 },
  { row: 6, col: 18 },
  { row: 7, col: 18 },
  { row: 9, col: 18 },
  { row: 10, col: 18 },
  { row: 11, col: 18 },
  { row: 8, col: 16 },
  { row: 8, col: 15 },
  { row: 8, col: 14 },
  { row: 8, col: 20 },
  { row: 8, col: 21 },
  { row: 8, col: 22 },
];

const PresetButtons = ({
  running,
  setRunning,
  runSimulation,
  runningRef,
  setGrid,
  setGen,
  gen,
  manualSimulation,
}) => {
  return (
    <div className="preset">
      <h2>Generation: #{gen}</h2>
      <button onClick={() => generateRandom(setGrid, setGen)}>Random</button>
      <button
        onClick={() => {
          generatePreset(blinker, setGrid, setGen);
        }}
      >
        Preset Pattern
      </button>
      <button onClick={() => manualSimulation()}>Next Generation</button>
      <button
        className="playButton"
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "Stop" : "Start"}
      </button>
      <button
        className="playButton"
        onClick={() => {
          setGen(0);
          setGrid(generateEmptyGrid());
        }}
      >
        Clear
      </button>
    </div>
  );
};
export default PresetButtons;
