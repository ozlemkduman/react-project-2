import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { UserContextProvider } from './context/UserContext.jsx'
import { SiteContextProvider } from './context/SiteContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <SiteContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SiteContextProvider>
    </UserContextProvider>
  </BrowserRouter>
)
