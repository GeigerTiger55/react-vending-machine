import React from "react";
import Nav from "./Nav";
import Snack from "./Snack";
import { Route, BrowserRouter, Routes } from "react-router-dom";

/**Renders routes
 * 
 * App --> VendingMachine --> { Snack, Nav }
 */
function VendingMachine() {
  return (
    <div className="VendingMachine">
        <h1>Vending Machine</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/snack/:snackName" element={<Snack />} />
          <Route path="/" element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
