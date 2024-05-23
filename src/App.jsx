import React from 'react'
import Menu from "./components/Menu.jsx"
import "./App.css"
import { useState } from 'react'
import {GameStateContext} from './helpers/context.jsx'

const App = () => {
  //[menu,playing,finished]
  const[gameState,setGameState]=useState("menu");

  return (
    <>
    <div className='App'>
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState,setGameState}}>
      {gameState==="menu" && <Menu />}
      </GameStateContext.Provider>
      
    </div>
    </>
  )
}

export default App
