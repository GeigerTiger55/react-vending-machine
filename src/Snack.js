import React from "react";
import { useNavigate, useParams } from "react-router-dom";

/** Show single bought snack
 * 
 * params: snackName (str)
 * 
 * VendingMachine --> Snack
 */
function Snack() {
  const { snackName } = useParams();
  const navigate = useNavigate();

  /** navigates to home*/
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <h1> You bought: {snackName}</h1>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}

export default Snack;
