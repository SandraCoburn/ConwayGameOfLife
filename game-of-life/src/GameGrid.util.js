import produce from "immer";
// import { generateEmptyGrid } from "./App";
export const numRows = 30;
export const numCols = 30;

export const operations = [
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
export const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    //initialize values with zeros
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

export function checkNeighbors(grid) {
  return produce(grid, (gridCopy) => {
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        let neighbors = 0;
        operations.forEach(([x, y]) => {
          const newI = i + x;
          const newJ = j + y;
          //Check we are not out of boundaries
          if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
            neighbors += grid[newI][newJ];
          }
        });
        //This covers the underpopulated cell rule
        if (neighbors < 2 || neighbors > 3) {
          gridCopy[i][j] = 0;
        } else if (grid[i][j] === 0 && neighbors === 3) {
          gridCopy[i][j] = 1;
        }
      }
    }
  });
}

export const generateRandom = (setGrid, setGen) => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (Math.random() > 0.6 ? 1 : 0)));
  }
  setGrid(rows);
  setGen((prevGen) => {
    return prevGen + 1;
  });
};

export function generatePreset(preset, setGrid, setGen) {
  const rows = generateEmptyGrid();
  //   for (let row = 0; row < numRows; row++) {
  //     //initialize values with zeros
  //     for (let col = 0; col < numCols; col++) {
  //       const currentLocation = { row: row, col: col };
  //       if (
  //         preset.filter(
  //           (coordinate) =>
  //             coordinate.row === currentLocation.row &&
  //             coordinate.col === currentLocation.col
  //         ).length > 0
  //       ) {
  //         rows[row][col] = 1;
  //       }
  //     }
  //   }
  preset.forEach((coordinate) => {
    rows[coordinate.row][coordinate.col] = 1;
  });

  setGrid(rows);
  setGen((prevGen) => {
    return prevGen + 1;
  });
}

export const changeColor = (cell, generation) => {
  if (cell && generation % 5 === 0) {
    return "#61dafb";
  } else if (cell) {
    return "#a2272d";
  } else if (generation > 10) {
    return "green";
  } else {
    return undefined;
  }
};
