import React from 'react'
import './App.css'
import Header from './components/Header'
import UserContextProvide from './context/UserContextProvide'

function App() {

  // const nahian ={
  //   name:"Nur nahian",
  //   Mobile:"01234567891",
  // }
  return (
    <>
    <UserContextProvide>
      <Header />

    </UserContextProvide>
      
    </>
  )
}

export default App
