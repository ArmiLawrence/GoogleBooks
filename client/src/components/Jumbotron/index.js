import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop: 90, textAlign: "center", backgroundColor: "teal" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
