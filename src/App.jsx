import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/hero'
import ActionSec from './components/ActionSec'
import SkillSection from './components/SkillSection'
import DevelopmentSec from './components/Development'
import ContactSec from './components/ContactSec'

function App() {

  return (
    <>
      <div className="bg-[#bab7b2]">
        <NavBar />
        <Hero />
        <ActionSec />
        <SkillSection />
        <DevelopmentSec />
        <ContactSec />

      </div>
    </>
  )
}

export default App
