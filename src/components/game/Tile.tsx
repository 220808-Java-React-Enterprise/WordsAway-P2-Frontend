import React from 'react'
import { useDrag } from 'react-dnd'

const Tile = ({ type, tileletter, position }: { type: string; tileletter: string; position: number }) => {
  var movetype = 'none'
  if (type === 'movetile' || type === 'traytile' || type === 'fbtile') {
    movetype = 'moveable'
  }

  const [, drag] = useDrag(() => ({
    type: movetype,
    item: { letter: tileletter, type: type, position: position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  function placetile() {
    if (type === 'boardtile') {
      if (tileletter === tileletter.toUpperCase() && tileletter!== "&") {
        return <div className='tile hit'>{tileletter.toUpperCase()}</div>
      } else {
        return <div style={{ backgroundColor: (tileletter === '&') ? 'rgba(220,220,220,.6)' : 'gainsboro' }} className='tile'>{tileletter.toUpperCase()}</div>
      }
    } else if (type === 'traytile') {
      return (
        <div ref={drag} className='tile'>
          {tileletter}
        </div>
      )
    } else if (type === 'movetile') {
      return (
        <div ref={drag} className='tile'>
          {tileletter}
        </div>
      )
    } else if (type === 'fbtile') {
      return (
        <div ref={drag} className='tile'>
          {tileletter}
        </div>
      )
    } else {
      return <div className='tile'>{tileletter}</div>
    }
  }

  return <>{placetile()}</>
}

export default Tile
