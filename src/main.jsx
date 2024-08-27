import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"

import { CartProvider } from '@/components/CartContext'
import { FavProvider } from '@/components/FavContext'

import {router} from '@/router/Index'
import { RouterProvider } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
  <FavProvider>
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
  </FavProvider>
  </CartProvider>
)
