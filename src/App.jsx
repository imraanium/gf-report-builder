import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-2xl font-bold title">
      GoFluent Report Builder
    </h1>
    <Form/>
    </>
  )
}

export default App
