import React from 'react'
import Cell from './Cell';

import Tile from './Tile';

export interface MainBoardProps {
  letters : string[];
  // worms : string[];
  updateGame: Function;
}

const MainBoard = ({letters, updateGame} : MainBoardProps) => {
  const rows = [];
  for(let i = 0; i<16; i++){
    const row = []
    for (let j=0; j<16;j++){     
      row.push(
        <Cell updateGame={updateGame} position={16 * i + j} type='boardtile' letter={letters[16*i+j]} key={16*i+j}/>
      )
      
    }
    rows.push(
      <div className='row' key={i}>
        {row}
      </div>
    )
  }

  return (
    <div className='mainboard'>
      {rows}
    </div>
  )
}

export default MainBoard