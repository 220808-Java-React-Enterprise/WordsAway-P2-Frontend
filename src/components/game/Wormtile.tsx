import React from 'react'

type Props = {
  letter:string
}

const Wormtile = (props: Props) => {
  return <div className='wormtile'>{props.letter.toUpperCase()}</div>
}

export default Wormtile
