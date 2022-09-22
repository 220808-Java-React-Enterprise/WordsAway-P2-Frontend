import React from 'react'

type Props = {
    activate:Function
    isActive:boolean
}

const FireballLaunch = (props: Props) => {
  return (
    <div className='fbcontainer'>
        <div className='fblaunch'>
            <div  onClick={()=>props.activate()} className='center'>Launch Fireball</div>
        </div>
      <div style={{
        backgroundColor: props.isActive ? 'red' : 'black'
      }} className='fireactive'></div>
    </div>
  )
}

export default FireballLaunch