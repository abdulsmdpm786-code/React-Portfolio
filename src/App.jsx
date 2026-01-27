import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/hero'
import ActionSec from './components/ActionSec'
import SkillSection from './components/SkillSection'

function App() {

  return (
    <>
      <div className="bg-[#bab7b2]">
        <NavBar />
        <Hero />
        <ActionSec />
        <SkillSection />

      </div>
    </>
  )
}

export default App
