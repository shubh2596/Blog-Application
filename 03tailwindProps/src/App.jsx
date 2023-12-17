import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App({username,btnText}) {
  console.log(username)
  const [count, setCount] = useState(0)
  const obj = {
    name: "shubham",
    age : "26"
  }

  return (
    <>
      <h1 className='bg-green-400 rounded text-black-4'> Tailwind Test</h1>
      
      <Card username="chai aur code" btnText="click me"/>
      <Card username="jainy" btnText="know more"/>
      <Card username="shubh" />

    </>
  )
}

export default App
