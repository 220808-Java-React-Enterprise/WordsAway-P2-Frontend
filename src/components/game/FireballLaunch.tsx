import { count } from 'console'
import React from 'react'
import Cell from './Cell'


type Props = {
  fb: any
  updateGame: Function
}

const FireballLaunch = (props: Props) => {

  const fbtile = []
  fbtile.push(
    <div key={0}/>
  )
  if (props.fb.count>0 && !props.fb.placed){
    fbtile.push(
    <Cell updateGame={props.updateGame()} position={0} type='fbtile' letter={'*'} key={1} />
    )
  }

  return (
    <div className='fbcontainer'>
      <div id='fbtray'>
        {fbtile}
      </div>
    </div>
  )
}

export default FireballLaunch
