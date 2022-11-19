import React from 'react'
import { FaRegistered } from 'react-icons/fa'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import User from './User'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/register' element={<Register />}  />
        <Route path='/alluser' element={<User />}  />
    </Routes>
  )
}

export default MainRoutes