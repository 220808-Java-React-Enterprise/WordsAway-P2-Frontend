import React from 'react'

type Props = {
  swapTray: Function
}

const SwapTray = (props: Props) => {
  return (
    <div onClick={() => props.swapTray()} className='swaptray'>
      <div>SwapTray</div>
    </div>
  )
}

export default SwapTray
