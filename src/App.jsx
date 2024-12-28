import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Notes from './Notes'
import Trash from './Trash'
import Navbar from './Navbar'
import ViewNote from './ViewNote'

const App = () => {
  return (
    <div className='w-full h-full '>

      <Routes>
        <Route path='/' element={<>
          <Navbar />
          <Home/>
        </>} />
        <Route path='/notes' element={<>
          <Navbar />
          <Notes/>
          </>} />
        <Route path='/notes/:id' element={<>
          <Navbar />
          <ViewNote/>
        </>} />
        <Route path='/trash' element={<>
          <Navbar />
          <Trash/>
        </>} />
      </Routes>
    </div>
  )
}

export default App
