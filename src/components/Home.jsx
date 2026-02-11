import React from 'react'
import Hero from '../components/hero'
import ActionSec from '../components/ActionSec'
import SkillSection from '../components/SkillSection'
import DevelopmentSec from '../components/Development'
import ContactSec from '../components/ContactSec'

function Home() {
  return (
    <div >

        <Hero />
        <ActionSec />
        <SkillSection />
        <DevelopmentSec />
        <ContactSec />
    </div>
  )
}

export default Home