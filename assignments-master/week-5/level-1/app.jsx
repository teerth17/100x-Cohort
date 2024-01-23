import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from './componets/BusinessCard'

function App() {
  const name = "Lokeshwar"
  const description = "A TA in 100xDevs Cohort2.0"
  const interestItems = ["Ionic", "Opensource", "Appdev"]
  const linkedin = "https:www.linkedin.com"
    const twitter = "https:www.twitter.com"


  return (
    <div>
      <BusinessCard name={name} description={description} interestItems={interestItems} linkedin={linkedin} twitter={twitter} />
    
    </div>
  )
}

export default App
