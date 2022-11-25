import React from 'react'
import { FaRegistered } from 'react-icons/fa'
import { Route, Routes } from 'react-router-dom'
import Check from './Check'
import Register from './Register'
import User from './User'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/register' element={<Check />}  />
        <Route path='/alluser' element={<User />}  />
        <Route path='/' element={<div>Welcome to actyv.ai assignment</div>}  />
    </Routes>
  )
}

export default MainRoutes