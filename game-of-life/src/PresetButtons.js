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
const gliderGun = [
  { row: 1, col: 1 },
  { row: 1, col: 2 },
  { row: 2, col: 1 },
  { row: 2, col: 2 },

  { row: 4, col: 5 },
  { row: 4, col: 6 },

  { row: 5, col: 5 },
  { row: 5, col: 6 },
  { row: 2, col: 8 },
  { row: 1, col: 8 },
  { row: 1, col: 9 },
  { row: 2, col: 9 },
  { row: 13, col: 22 },
  { row: 13, col: 23 },
  { row: 14, col: 22 },
  { row: 14, col: 23 },
  { row: 13, col: 19 },
  { row: 12, col: 18 },

  { row: 14, col: 18 },
  { row: 15, col: 17 },
  { row: 11, col: 17 },
  { row: 11, col: 16 },
  { row: 11, col: 14 },
  { row: 11, col: 13 },

  { row: 12, col: 12 },
  { row: 13, col: 12 },
  { row: 14, col: 12 },
  { row: 14, col: 13 },
  { row: 14, col: 14 },
  { row: 23, col: 14 },

  { row: 22, col: 14 },
  { row: 22, col: 13 },
  { row: 22, col: 12 },
  { row: 21, col: 11 },
  { row: 20, col: 11 },
  { row: 20, col: 12 },
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
      <button
        onClick={() => {
          generatePreset(gliderGun, setGrid, setGen);
        }}
      >
        Simkin glider gun
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
