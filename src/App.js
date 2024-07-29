import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./components/Header.js"
import Headerbody from "./components/Headerbody.js"
import Crew from "./components/Crew.js"
import Destination from "./components/Destination.js"
import Technology  from "./components/Technology.js" 
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Headerbody/>} />
        <Route path="/destination" element={<Destination/>}/> 
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Technology/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App