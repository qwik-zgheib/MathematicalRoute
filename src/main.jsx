import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom"
import router from "./routes/routes.jsx" 
// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> 
    <App className="bg-slate-800"/>
      </RouterProvider> 
  </React.StrictMode>,
)
