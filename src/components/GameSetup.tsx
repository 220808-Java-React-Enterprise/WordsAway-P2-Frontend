import React from 'react'
import SetupBoard from './gamesetup/SetupBoard'
import WormTray from './gamesetup/WormTray'


const GameSetup = () => {
  return (
      <div className=' container'>
        <div className='gamesetup container'>
            <SetupBoard/>
            <WormTray/>
        </div>
      </div>
  )
}

export default GameSetup