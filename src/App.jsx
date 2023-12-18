import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Sidebar from './Components/Sidebar'
import CharacterContainer from './Pages/CharacterContainer'
import PlanetContainer from "./Pages/PlanetContainer"
import StarshipContainer from './Pages/StarshipContainer'
import CharacterPage from './Pages/CharacterPage'
import PlanetPage from "./Pages/PlanetPage"
import StarshipPage from './Pages/StarshipPage'
import Index from './Components/Index'
import './App.css'
import injectContext from "./context/AppContext.jsx";


function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/characters' element={<CharacterContainer />} />
          <Route path='/planets' element={<PlanetContainer />} />
          <Route path='/starships' element={<StarshipContainer />} />
          <Route path='/character/' element={<CharacterPage />} />
          <Route path='/planet/' element={<PlanetPage />} />
          <Route path='/starship/' element={<StarshipPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default injectContext(App)
