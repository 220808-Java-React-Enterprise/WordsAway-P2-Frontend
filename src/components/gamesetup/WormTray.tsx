import React from 'react'
import WormCell from './WormCell'


const WormTray = () => {
    const wormcells = []
    for (let i = 0; i< 5; i++){
        wormcells.push(
            <WormCell key={i}/>
        )
    }


  return (
    <div className='wormtray'>
        {wormcells}
    </div>
  )
}

export default WormTray