import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import MainRoutes from './routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
