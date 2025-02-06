import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WelcomeMessage from './Components/LoginSignup/LoginAlert.jsx'
import Notification from './Components/LoginSignup/Notification.jsx'
import IteamList from './Components/ListRendering/IteamList.jsx'
import ProductList from './Components/ListRendering/ProductList.jsx'
import TaskList from './Components/ListRendering/TaskList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <WelcomeMessage/> */}
    {/* <Notification/> */}
    {/* <ProductList/> */}
    {/* <IteamList/> */}
    <TaskList/>
  </StrictMode>,
)
