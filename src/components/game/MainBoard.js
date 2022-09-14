import React from 'react'



const MainBoard = ({letters, worms}) => {
  const rows = [];
  for(let i = 0; i<16; i++){
    const row = []
    for (let j=0; j<16;j++){
      const letter = []
      if(letters[16*i+j]!=="."){
        letter.push(letters[16 * i + j].toUpperCase())
      }
      
      row.push(
        <div className='tile' key={j}>
          {letter}
        </div>
      )
      
    }
    rows.push(
      <div className='row' key={i}>
        {row}
      </div>
    )
  }

  return (
    <div className='mainboard'>
      {rows}
    </div>
  )
}

export default MainBoard