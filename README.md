# Conway's Game Of Life
Lambda School Computer Science Build Week 1.
<br>
Deployed site: https://cowgameoflife.netlify.app/

---
##### Welcome to John Conway's "Game of Life"! 
---
This is a computer science classic from 1970, a program that simulates a cellular automaton (plural automata).
It has connections to all kinds of different aspects of computer science and nature

A cellular automaton (plural: cellular automata, abbreviated CA) is a program that operates on data typically stored in a 2D grid. (1D, 3D and n-D cellular         automata run on lines, cubes, etc.)
A simple set of rules describes how the value in a cell on the grid changes over time, often as the result of the states of that cell's neighbors.
Each round of the simulation examines the current state of the grid, and then produces an entirely new grid consisting of the old state.

CAs have been used in biological and chemical simulations and other areas of research, such as CA-based computer processors, and other numeric techniques.

---
**This project was created using CRA, Javascript, React Router, immer library and CSS.**
---
## General Rules:


        1. A living cell will stay alive if 2 or 3 neighbours are alive.
        2. Dead cell will come alive if exactly 3 neighbours are living.

        3. Cells with less than 2 neighbours will die of underpopulation, cells
          with 4 or more neighbours will die of overpopulation.

        4. All other live cells die in the next generation. Similarly, all other
          dead cells stay dead.

---
### Game Rules:
* Player can click on any cell to make a custom pattern then click on the "Start" button to initiate a simulation. Click on Stop to pause.

* While running clicking on cells is disabled.
* Player can use the "Random" button to generate a random number of live cells onto the grid.
* Player can use the "Start/Stop" button to initiate or stop a simmulation.
* Player can clear the previous grid with the "Clear" button.     
* Player can see the simulation one generation at a time by clicking on the "Next Generation" button.        
* "Preset" button has a cell pattern that Player can activate and see how the patterns change but never die.

![example-patterns](https://media.giphy.com/media/4VVZTvTqzRR0BUwNIH/giphy.gif)
