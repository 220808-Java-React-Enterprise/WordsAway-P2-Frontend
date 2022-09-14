import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrag } from 'react-dnd'

const Tray = () => {
  
  const tray = []
  for (let i = 0; i<7;i++){
    tray.push(
      <div className='tile' key={i}/>
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
    <div className='tray'>
      {tray}
    </div>
    </DndProvider>
  )
}

export default Tray