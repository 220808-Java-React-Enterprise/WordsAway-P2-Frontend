import { count } from 'console'
import React from 'react'
import Cell from './Cell'


type Props = {
  activate: Function
  isActive: boolean
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
      {/* <div onClick={() => props.activate()} className='fblaunch'>
        <div  className='center'>
          Launch Fireball
        </div>
      </div>
      <div
        style={{
          backgroundColor: props.isActive ? 'red' : 'black'
        }}
        className='fireactive'
      ></div> */}
    </div>
  )
}

export default FireballLaunch
