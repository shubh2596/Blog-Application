import './App.css'
import UserContextProvider from '../context/UserContextProvider'
import LogIn from './components/LogIn'
import Profile from './components/Profile'

function App() {
  

  return (
    <>
    <UserContextProvider>
      <LogIn />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
