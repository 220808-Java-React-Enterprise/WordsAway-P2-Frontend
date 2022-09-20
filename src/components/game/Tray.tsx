import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrag } from 'react-dnd'
import Cell from './Cell'


const Tray = ({trayletters, updateGame}:{trayletters:any, updateGame:Function}) => {
  
  const tray = []
  for (let i = 0; i<7;i++){
    if (trayletters[i] != ".") {
      tray.push(

        <Cell updateGame={updateGame} position={i} type='traytile' letter={trayletters[i]} key={i} />
      )
    }else{
      tray.push(

        <Cell updateGame={updateGame} position={i} type='emptytraytile' letter={trayletters[i]} key={i} />
      )
    }
    
  }

  return (
    
    <div className='tray'>
      {tray}
    </div>
    
  )
}

export default Tray