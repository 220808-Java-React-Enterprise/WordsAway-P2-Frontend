import React from 'react'
import Cell from './Cell';

import Tile from './Tile';

export interface MainBoardProps {
  letters : string[];
  // worms : string[];
  updateGame: Function;
  moves: string[]
  hits: string[]
}

const MainBoard = ({letters, updateGame, moves, hits} : MainBoardProps) => {
  const rows = [];
  for(let i = 0; i<16; i++){
    const row = []
    for (let j=0; j<16;j++){
      if (hits[16 * i + j] !='.'){
        if (hits[16 * i + j] == 'h'){
          row.push(
            <Cell updateGame={updateGame} position={16 * i + j} type='hitcell' letter={letters[16 * i + j]} key={16 * i + j} />
          )
        } else if (hits[16 * i + j] == 'm'){
          
          row.push(
            <Cell updateGame={updateGame} position={16 * i + j} type='misscell' letter={moves[16 * i + j]} key={16 * i + j} />
          )
        }
      }

      else if (moves[16 * i + j]!='.'){
        row.push(
        <Cell updateGame={updateGame} position={16 * i + j} type='movetile' letter={moves[16 * i + j]} key={16 * i + j} />
        )
      }else     {
        row.push(
          <Cell updateGame={updateGame} position={16 * i + j} type='boardtile' letter={letters[16*i+j]} key={16*i+j}/>
        )
      }
      
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