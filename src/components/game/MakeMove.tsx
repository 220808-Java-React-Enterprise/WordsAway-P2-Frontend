import React from 'react'

type Props = {
  makeMove: Function
}

const MakeMove = (props: Props) => {
  return (
    <div onClick={() => props.makeMove()} className='makemove'>
      <div className='center'>Make Move</div>
    </div>
  )
}

export default MakeMove
