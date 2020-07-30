import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./about";

const Header = (props) => {
  return (
    <div>
      <nav>
        <div>
          <li>
            <Link exact to="/" activeStyle={{ color: "red" }}>
              Conway's Game of Life
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </div>
      </nav>
      <div>
        <Route exact path="/about" component={About} />
      </div>
    </div>
  );
};
export default Header;
