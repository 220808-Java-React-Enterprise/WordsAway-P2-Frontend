import React from 'react'
import Tile from './Tile'
import { useDrop } from 'react-dnd'
import { LiteralToken } from 'typescript'

const Cell = ({letter, type, position, updateGame}: {letter:string, type:string, position:number, updateGame:Function}) => {

    var dropType = 'none'
    if (letter=="."){
        dropType = 'moveable'
    }

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: dropType,
            drop: (item:any) => {
                //updateGame(inOb:string, outOb:string, inN:number, outN:number, letter:string)

                updateGame(type, item.type, position, item.position, item.letter);
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver()
            })
        })
    )


    function placecell(){
        if (type=='misscell'){
            return (
                <div className='cell miss'>
                    <Tile position={position} tileletter={letter} type={type} />
                </div>
            )
        } else if (type == 'hitcell'){
            return (
                
                <div className='cell'>
                    <Tile position={position} tileletter={letter} type={type} />
                </div>
            )
        }
        else if (letter!="."){
            if (letter!='*'){
            return(
                <div className='cell'>
                <Tile position={position} tileletter={letter} type={type} />
                </div>
            )}else {
                return (
                    <div className='cell hit'>
                        <Tile position={position} tileletter={letter} type={'bombtile'} />
                    </div>
                )
            }
        }       
        else {
            return(
                <div ref={drop} className='cell'>
                    
                </div>
            )
        }
    }

    return (
        <>
            {placecell()}
        </>
    )
}

export default Cell