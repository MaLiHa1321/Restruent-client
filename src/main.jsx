import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/Router';
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

    <div className='max-w-screen-xl mx-auto'>

   <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
