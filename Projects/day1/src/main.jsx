import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RecatApp from './Components/WelcomeRecat/RecatApp.jsx'
import Header from './Components/Header.jsx'
import Navebar from './Components/Navebar.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
      {/* <App /> */}
      <RecatApp/>
      {/* <Header /> */}
      {/* <Navebar /> */}
    </StrictMode>,
)
