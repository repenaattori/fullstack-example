import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  let info = {fname: 'Reima', lname: 'Riihimäki'};

  function getData(){
    axios.postForm('http://localhost:3001/data', info)
      .then(res => console.log(res.data))
  }

  return (
    <>
      <button onClick={getData}>OK</button>
    </>
  )
}

export default App
