import React from "react";
const Rules = () => {
  return (
    <div className="rules2">
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
          Player can click on any cell to make a custom pattern then click on
          the "Start" button to initiate a simulation. Click on Stop to pause.
          While running clicking on cells is disabled.
        </li>
        <li>
          Player can use the "Random" button to generate a random number of live
          cells onto the grid.
        </li>
        <li>
          Player can use the "Start/Stop" button to initiate or stop a
          simmulation.
        </li>
        <li>Player can clear the previous grid with the "Clear" button.</li>
        <li>
          Player can see the simulation one generation at a time by clicking on
          the "Next Generation" button.
        </li>
        <li>
          "Preset" button has a cell pattern that Player can activate and see
          how the patterns change but never die.
        </li>
        <li>
          Player can click on "Simkin glider gun" button to star a preset patter
          (In 2015, a gun called the "Simkin glider gun", which releases a
          glider every 120th generation, was discovered that has fewer live
          cells but which is spread out across a larger bounding box at its
          extremities.).
        </li>
      </ul>
    </div>
  );
};
export default Rules;
