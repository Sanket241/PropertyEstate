import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Listing from './pages/Listing'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path='/listing' element={<Listing />} />
            <Route path='/create-listing' element={<CreateListing />} />
          </Route>




        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App