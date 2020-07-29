import React from "react";

const Preset = ({ running, setRunning, runSimulation, runningRef }) => {
  return (
    <div className="preset">
      <h2>Generation: #</h2>
      <button>Preset 1</button>
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
      <button className="playButton">Clear</button>
    </div>
  );
};
export default Preset;
