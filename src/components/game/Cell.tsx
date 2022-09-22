import React from 'react'
import Tile from './Tile'
import { useDrop } from 'react-dnd'
import { LiteralToken, updateTypeAssertion } from 'typescript'

const Cell = ({letter, type, position, updateGame}: {letter:string, type:string, position:number, updateGame:Function}) => {

    var dropType = 'none'
    if (letter == "." || letter == "!" || letter=="@"){
        dropType = 'moveable'
    }

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: dropType,
            drop: (item:any) => {
                //(inOb:string, outOb:string, inN:number, outN:number, letter:string)
                // updateTest(type, item.type, position, item.position, item.letter);
                updateGame(type, item.type, position, item.position, item.letter);
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver()
            })
        })
    )

    function updateTest(inOb: string, outOb: string, inN: number, outN: number, letter: string){
        console.log(inOb + " | " + outOb + " | " + inN + " | " + outN + " | " + letter + " | ")
        }

    function placecell(){

        if (type=='boardtile'){
            return(
                <div className='cell'>
                    <Tile tileletter={letter} position={position} type='boardtile' />
                </div>
            )
        } else if (type == 'movetile'){
            return (
                <div className='cell'>
                    <Tile tileletter={letter} position={position} type='movetile' />
                </div>
            )

        } else if (type == 'traytile') {
            return (
                <div className='cell'>
                    <Tile tileletter={letter} position={position} type='traytile' />
                </div>
            )

        } else if (type == '!') {
            return (
                <div ref={drop} className='cell miss'>
                    
                </div>
            )

        } else if (type == '@') {
            return (
                <div ref={drop} className='cell hit'>
                    {/* <Tile tileletter={letter} position={position} type='@' /> */}
                </div>
            )

        } else if (type == 'empty'){
            return (
                <div ref={drop} className='cell'>
                    
                </div>
            )
        }

        // if (type=='misscell'){
        //     return (
        //         <div className='cell miss'>
        //             <Tile position={position} tileletter={letter} type={type} />
        //         </div>
        //     )
        // } else if (type == 'hitcell'){
        //     return (
                
        //         <div className='cell'>
        //             <Tile position={position} tileletter={letter} type={type} />
        //         </div>
        //     )
        // }
        // else if (letter!="."){
        //     if (letter!='*'){
        //     return(
        //         <div className='cell'>
        //         <Tile position={position} tileletter={letter} type={type} />
        //         </div>
        //     )}else {
        //         return (
        //             <div className='cell hit'>
        //                 <Tile position={position} tileletter={letter} type={'bombtile'} />
        //             </div>
        //         )
        //     }
        // }       
        // else {
        //     return(
        //         <div ref={drop} className='cell'>
                    
        //         </div>
        //     )
        // }
    }

    return (
        <>
            {placecell()}
        </>
    )
}

export default Cell