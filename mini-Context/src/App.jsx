import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UsercontextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h2>This is a context API Demo youtube</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
