import React, { useState, useEffect } from 'react'
import TopBanner from './game/TopBanner'
import MainBoard from './game/MainBoard'
import SecondaryBoard from './game/SecondaryBoard'
import Tray from './game/Tray'
import BottomBanner from './game/BottomBanner'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import MakeMove from './game/MakeMove'
import FireballLaunch from './game/FireballLaunch'
import FireballCounter from './game/FireballCounter'
import WORDS_API from '../utils/ApiConfig'
import axios, { AxiosResponse } from 'axios';
import DefaultBoard, { Board } from './game/Board.type'
import { check } from 'prettier'
import SwapTray from './game/SwapTray'

// 

const Game = () => {
    const bb: string[] = [
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
        ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."
    ]

    const [users, setUsers] = useState([
        {"username": "_"},
        {"username": "_"}
    ])
    const [board, setboard] = useState(bb)
    const [move, setMove] = useState(bb)
    const [tray, setTray] = useState([".", ".", ".", ".", ".", ".", "."])
    const [worms, setWorms] = useState([{
        "worms": bb
    },
    {
        "worms": bb
    }
    ])
    const [mergeBoard, setMergeBoard] = useState(bb)

    const [fireactive, setfireactive] = useState(false)
    function getGame() {
      let board_id = sessionStorage.getItem("board_id");
      if (board_id == null) window.location.href = "/login";
      else {
        WORDS_API.get("getGame", { params: { id: board_id } }).then(
          async (response: AxiosResponse) => {
            // console.log(response.data);
//            setGame(response.data);
            updateState(response.data);
          }
        ).catch(() => window.location.href = "/login");
      }
    }
    useEffect(() => {
        getGame();
    },[]);

    function updateState(game: Board) {
        // WORDS_API.get("/getGame").then((response: AxiosResponse<User[]>) => {
        //     console.log(response.data);
        //     setUsers(response.data);
        // })

        setboard(game.letters.split(""))
        setMove([
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."
            ])
        setTray(game.tray.split(""))
       
        setWorms([{
            "worms": [
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
                ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."
            ]
        },
        {
            "worms": game.worms.split("")
        }
        ])
        setUsers([{username: (sessionStorage.getItem("username") || "")}, {username: game.opponent}])
    }

    useEffect(()=>{
        sessionStorage.setItem('board', JSON.stringify(board))
        sessionStorage.setItem('move', JSON.stringify(move))
        sessionStorage.setItem('tray', JSON.stringify(tray))
        sessionStorage.setItem('tray', JSON.stringify(tray))
    })

    function activateFire(){
        if (fireactive){console.log('Fireball active')}
        else { console.log('Fireball inctive') }
        setfireactive(!fireactive)
    }

    

    function checkMove(themove:string[]){
        console.log(themove)

        // send boardID, layout, replacedTray

        WORDS_API.post("checkMove", {  
            boardID : sessionStorage.board_id,
            layout  : themove,
            replacedTray : false
         }).then(
            async (response: AxiosResponse) => {
                console.log(response.data);
                updateState(response.data);
            }
        ).catch((error) => {
            console.log(error)
        });
    }

    function makeMove(){
        console.log('makemove')
        WORDS_API.post("makeMove", {
            boardID: sessionStorage.board_id,
            layout: move,
            replacedTray: false
        }).then(
            async (response: AxiosResponse) => {
                console.log(response.data);
                updateState(response.data);
            }
        ).catch((error) => {
            console.log(error)
        });

    }

    function swapTray(){
        console.log('makemove')
        WORDS_API.post("makeMove", {
            boardID: sessionStorage.board_id,
            layout: bb,
            replacedTray: true
        }).then(
            async (response: AxiosResponse) => {
                console.log(response.data);
                updateState(response.data);
            }
        ).catch((error) => {
            console.log(error)
        });
    }

    function updateGame(inOb:string, outOb:string, inN:number, outN:number, letter:string){
        // console.log("Letter: " + letter)
        // console.log("From: " + outOb + " at " + outN)
        // console.log("To: " + inOb + " at " + inN)
        
        // changing outgoing cells
        var OOut = [], OIn = [], NOut:string[] = [], NIn:string[] = [];
        if (outOb === 'traytile' && inOb === 'empty'){
            OOut = JSON.parse(sessionStorage.tray)
            OIn = JSON.parse(sessionStorage.move)

            NOut = [...OOut];
            NIn = [...OIn];
            NIn[inN] = NOut[outN];
            NOut[outN] = "."

            setTray(NOut)
            setMove(NIn)
            checkMove(NIn)
        } else if (outOb === 'movetile' && inOb === 'empty'){
            OIn = JSON.parse(sessionStorage.move)
            NIn = [...OIn];
            NIn[inN] = NIn[outN];
            NIn[outN] = "."
            setMove(NIn)
            checkMove(NIn)
        } else if (outOb === 'movetile' && inOb === 'emptytraytile'){
            OIn = JSON.parse(sessionStorage.tray)
            OOut = JSON.parse(sessionStorage.move)

            NOut = [...OOut];
            NIn = [...OIn];
            NIn[inN] = NOut[outN];
            NOut[outN] = "."

            setTray(NIn)
            setMove(NOut)
            checkMove(NOut)
        } else if (outOb === 'traytile' && inOb === 'emptytraytile') {
            OIn = JSON.parse(sessionStorage.tray)

            NIn = [...OIn];
            NIn[inN] = NIn[outN];
            NIn[outN] = "."


            setTray(NIn)
        }
    }
    

    
  return (
    
    <div className='game'>
        <DndProvider backend={HTML5Backend}>
            <TopBanner name={users[1].username}/>
            <div className='boards'>
                <div className='leftboard'>
                    
                <MainBoard moves={move} updateGame={updateGame} letters={board} />
                  </div>
                  <div className='rightboard'> 
                    <SecondaryBoard worms={worms[1].worms} />
                    <FireballCounter count={3}/>
                    <FireballLaunch isActive={fireactive} activate={activateFire}/>
                    <div className='movebar'>
                        <MakeMove makeMove={makeMove}/>
                        <SwapTray swapTray={swapTray}/>
                    </div>
                  </div>
            </div>
            
              <Tray updateGame={updateGame} trayletters={tray} />
                    
            
              <BottomBanner name={users[0].username}/>
        </DndProvider>
    </div>
    
  )
}

export default Game