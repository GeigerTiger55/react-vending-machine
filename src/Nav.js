import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

const defaultSnacks = [
  "peanut m&m's",
  "reese's",
  "flaming hot cheetos",
  "potato chips",
];

/** Shows all snacks
 * 
 * props: snacks (arr)
 * 
 * VendingMachine --> Nav
 */
function Nav({ snacks = defaultSnacks }) {
  return (
    <ul className="Nav">
      {snacks.map((snack) => (
        <li key={snack}>
          <Link to={`/snack/${snack}`}>{snack}!</Link>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
