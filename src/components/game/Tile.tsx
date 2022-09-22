import React from 'react'
import { useDrag } from 'react-dnd'

const Tile = ({type, tileletter, position}:{type:string, tileletter:string, position:number}) => {

  var tiletype = 'none'
  if (type === 'movetile' || type === 'traytile') {
    tiletype = 'moveable'
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: tiletype,
    item: {letter:tileletter, type:type, position:position},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  function placetile() {
    if (!tileletter) return(<div />)
    if (type === 'boardtile') {
      return(<div  className='tile'>{tileletter.toUpperCase()}</div>)
    }else if (type === 'traytile'){      
      return(<div ref={drag} className='tile'>{tileletter.toUpperCase()}</div>)
    }else if (type === 'movetile'){
      return(<div ref={drag} className='tile move'>{tileletter.toUpperCase()}</div>)
    } else if (type === 'hitcell') {
      return (<div ref={drag} className='tile hit'>{tileletter.toUpperCase()}</div>)
    } else if (type === 'bombtile'){
      return (<div className='tile miss bomb'>{tileletter.toUpperCase()}</div>)
    }
  }

  return (
    <>
    {placetile()}
    </>
  )
}

export default Tile;
