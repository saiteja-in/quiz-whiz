import React from 'react'
import {useContext} from 'react'
import {GameStateContext} from '../helpers/context'

import '../Menu.css'
const Menu = () => {
    const {gameState,setGameState}=useContext(GameStateContext)
  return (
    <div className='menu-container'>
     <input placeholder="Ex. Adolf Hitler" ></input>
     <button onClick={()=>{setGameState("playing")}}>Start Quiz</button>
    </div>
  )
}

export default Menu
