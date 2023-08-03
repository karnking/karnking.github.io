import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages.jsx/Home'
import ErrorPage from '../Pages.jsx/ErrorPage'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default AllRoutes