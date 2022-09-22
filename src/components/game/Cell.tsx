import React from "react";
import Tile from "./Tile";

const Cell = ({ letter }: { letter: string }) => {
  function placetile() {
    if (letter != ".") {
      return (
        // <Tile tileletter={letter}/>
        <div className="tile">{letter.toUpperCase()}</div>
      );
    }
  }

  return (
    <div className="cell">
      {/* {letter} */}
      {placetile()}
    </div>
  );
};

export default Cell;
