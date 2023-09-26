import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { SiteContextProvider } from './context/SiteContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SiteContextProvider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
    </SiteContextProvider>
  </BrowserRouter>,
)
