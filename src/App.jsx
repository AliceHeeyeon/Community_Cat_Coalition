import { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import './css/App.css'
import useCustomiser from './hooks/useCustomiser'

import Header from './components/Header'
import Footer from './components/Footer'
import Links from '../Links'

function App() {
  const { font } = useCustomiser()

  useEffect(() => {
    if (font === 'RobotoCondensed') {
      document.body.style.fontFamily = `'Roboto Condensed', sans-serif`
    }
    if (font === 'Poppins') {
      document.body.style.fontFamily = `'Poppins', sans-serif`
    }
    if (font === 'Hind') {
      document.body.style.fontFamily = `'Hind', sans-serif`
    }
    if (font === 'MerriweatherSans') {
      document.body.style.fontFamily = `'Merriweather Sans', sans-serif`
    }

  },[font])

  return (
    <HashRouter>
        <Header />
        <Links />
        <Footer />
    </HashRouter>
  )
}

export default App
