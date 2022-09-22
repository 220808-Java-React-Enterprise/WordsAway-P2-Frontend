import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag } from "react-dnd";
import TrayTile from "./TrayTile";

const Tray = ({ trayletters }: any) => {
  const tray = [];
  for (let i = 0; i < 7; i++) {
    tray.push(<TrayTile letter={trayletters[i]} key={i} />);
  }

  return <div className="tray">{tray}</div>;
};

export default Tray;
