import React from "react";

const About = () => {
  return (
    <div className="rules">
      <h1>*Origins and Rules:</h1>
      <p>
        Motivated by questions in mathematical logic and in part by work on
        simulation games, John Conway began doing experiments in 1968 with a
        variety of different two-dimensional cellular automaton rules. Conway's
        initial goal was to define an interesting and unpredictable cell
        automaton. For example, he wanted some configurations to last for a long
        time before dying and other configurations to go on forever without
        allowing cycles. It was a significant challenge and an open problem for
        years before experts on cellular automata managed to prove that, indeed,
        the Game of Life admitted of a configuration which was alive in the
        sense of satisfying Von Neumann's two general requirements. While the
        definitions before the Game of Life were proof-oriented, Conway's
        construction aimed at simplicity without a priori providing proof the
        automaton was alive. Conway chose his rules carefully, after
        considerable experimentation, to meet these criteria:
      </p>
      <br></br>
      <li>There should be no explosive growth.</li>
      <li>
        {" "}
        There should exist small initial patterns with chaotic, unpredictable
        outcomes.
      </li>
      <li>
        {" "}
        There should be potential for von Neumann universal constructors.
      </li>
      <li>
        {" "}
        The rules should be as simple as possible, whilst adhering to the above
        constraints{" "}
      </li>
      <br />
      <p>
        The game made its first public appearance in the October 1970 issue of
        Scientific American, in Martin Gardner's "Mathematical Games" column.
      </p>

      <p>
        The universe of the Game of Life is an infinite, two-dimensional
        orthogonal grid of square cells, each of which is in one of two possible
        states, live or dead, (or populated and unpopulated, respectively).
        Every cell interacts with its eight neighbours, which are the cells that
        are horizontally, vertically, or diagonally adjacent. At each step in
        time, the following transitions occur:
      </p>
      <ul>
        <li>
          Any live cell with fewer than two live neighbours dies, as if by
          underpopulation.
        </li>
        <li>
          Any live cell with two or three live neighbours lives on to the next
          generation.
        </li>
        <li>
          Any live cell with more than three live neighbours dies, as if by
          overpopulation
        </li>
        <li>
          Any dead cell with exactly three live neighbours becomes a live cell,
          as if by reproduction.
        </li>
        <li>
          All other live cells die in the next generation. Similarly, all other
          dead cells stay dead.
        </li>
      </ul>
      <br></br>
      <p>
        The initial pattern constitutes the seed of the system. The first
        generation is created by applying the above rules simultaneously to
        every cell in the seed; births and deaths occur simultaneously, and the
        discrete moment at which this happens is sometimes called a tick. Each
        generation is a pure function of the preceding one. The rules continue
        to be applied repeatedly to create further generations.
      </p>
      <p>
        It is possible to build a pattern that acts like a finite-state machine
        connected to two counters. This has the same computational power as a
        universal Turing machine, so the Game of Life is theoretically as
        powerful as any computer with unlimited memory and no time constraints;
        it is Turing complete. In fact, several different programmable computer
        architectures have been implemented in the Game of Life, including a
        pattern that simulates Tetris.
      </p>
      <p>*All imformation in this page was taken from wikipedia.</p>
    </div>
  );
};
export default About;
