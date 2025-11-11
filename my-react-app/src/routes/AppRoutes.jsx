import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserLogin from '../components/auth/UserLogin'
import UserRegister from '../components/auth/UserRegister'
import PartnerLogin from '../components/auth/PartnerLogin'
import PartnerRegister from '../components/auth/PartnerRegister'
import Home from '../general/Home'
import CreateFood from '../foodCreation/CreateFood'
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/register" element={<PartnerRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/food/create" element={<CreateFood />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
