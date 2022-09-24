import React from 'react'

type Props = {
    message:string;
    active:boolean;
}

const Overlay = (props: Props) => {
  return (
    <div id='gameoverlay' style={{
        display:props.active?'none':'block'
    }}></div>
  )
}

export default Overlay