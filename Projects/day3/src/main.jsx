import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Components/Counters/Counter.jsx'
import Event from './Components/Events/Event.jsx'
import TextInput from './Components/CtrComponents/LiveTextUpdate.jsx'
import ThemeToggle from './Components/ToggleBtn/Dark&Light.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <Event/> */}
    {/* <TextInput/> */}
    <ThemeToggle/>
  </StrictMode>,
)
