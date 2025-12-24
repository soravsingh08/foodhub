import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div className='appLayout'>
    <Header/>
    <Outlet/>
    </div>
  )
}
export default App