import { useState } from 'react'
import Chat from './components/Chat'
import Video from './components/Video'
import './App.css'


// TODO
// import Video from './components/Video's

function App() {

  return (
    <div className='u-App-container'>
      <Chat />
      {/* TODO */}
      <Video />
    </div>
  )
}

export default App