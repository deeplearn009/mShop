import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import AdminPanel from '../pages/admin/AdminPanel'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/admin' element={<AdminPanel/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default Router
