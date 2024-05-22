import React from 'react'
import './App.css'
import Header from './components/Header'

function App() {

  const nahian ={
    name:"Nur nahian",
    Mobile:"01234567891",
  }
  return (
    <>
      <Header {...nahian}/>
      
    </>
  )
}

export default App
