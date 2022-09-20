import React from 'react'
import {useDrag} from 'react-dnd'


type Props = {
    type:string
}

const Worm = (props: Props) => {

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'worm',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    

    if (props.type == "a") {
        return isDragging ? (<div style={{ 
            opacity:  .5 , 
            backgroundColor:'red',
            width: '3rem' 
        }} ref={preview} className='worma-v worm-v worm' />) 
        : (<div style={{ 
                opacity: 1,
                backgroundColor: 'green',
                width: '1rem' 
        }} ref={drag} className='worma-v worm-v worm' />)
}
    else if (props.type == "b") { return isDragging ? (<div style={{ opacity: isDragging ? 0 : 1 }} ref={drag} className='wormb-v worm-v worm' />) : (<div style={{ opacity: isDragging ? 0 : 1 }} ref={drag} className='wormb-v worm-v worm' />) }
    else if (props.type == "c") { return (<div style={{ opacity: isDragging ? 0 : 1 }} ref={drag} className='wormc-v worm-v worm' />) }
    else if (props.type == "d") { return (<div style={{ opacity: isDragging ? 0 : 1 }} ref={drag} className='wormd-v worm-v worm' />) }
    else if (props.type == "s") { return (<div style={{ opacity: isDragging ? 0 : 1 }} ref={drag} className='worms-v worm-v worm' />) }

  return (
    <div>Worm</div>
  )
}

export default Worm