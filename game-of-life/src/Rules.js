import React from "react";
const Rules = () => {
  return (
    <div className="rules">
      <h1>Rules:</h1>

      <ul>
        <li>A living cell will stay alive if 2 or 3 neighbours are alive.</li>
        <li>A dead cell will come alive if exactly 3 neighbours are living.</li>
        <li>
          Cells with less than 2 neighbours will die of underpopulation, cells
          with 4 or more neighbours will die of overpopulation.
        </li>
        <li>
          All other live cells die in the next generation. Similarly, all other
          dead cells stay dead.
        </li>
      </ul>
      <br></br>
      <ul>
        <li>
          Player can use the Random button to generate random number of live
          cells onto the grid.
        </li>
        <li>
          Player can use the Start/Stop button to initiate or stop a
          simmulation.
        </li>
        <li>Player can clear the previous grid with the Clear button.</li>
      </ul>
    </div>
  );
};
export default Rules;
