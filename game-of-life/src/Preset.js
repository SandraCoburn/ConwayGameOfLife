import React from "react";

const Preset = ({
  running,
  setRunning,
  runSimulation,
  runningRef,
  generateEmptyGrid,
  setGrid,
  generateRandom,
  setGen,
  gen,
}) => {
  return (
    <div className="preset">
      <h2>Generation: #{gen}</h2>
      <button onClick={() => generateRandom()}>Random</button>
      <button>Preset 2</button>
      <button>Preset 3</button>
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
          //   setGen(0);
          setGrid(generateEmptyGrid());
        }}
      >
        Clear
      </button>
    </div>
  );
};
export default Preset;
