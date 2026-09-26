import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  AuthLayout, AntiScreenshot,
  CursorTrail,
} from "./components";

//Pages
import {
  Home,
  Portfolio,
  Policies,
} from "./Pages/index.js";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/" element={<AuthLayout><Home /></AuthLayout>} />
      <Route path="/portfolio" element={<AuthLayout><Portfolio /></AuthLayout>} />
      <Route path="/policies" element={<AuthLayout><Policies /></AuthLayout>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <AntiScreenshot /> */}
    <CursorTrail />
  </StrictMode>,
)