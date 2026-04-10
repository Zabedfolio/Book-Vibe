import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { router } from './components/routes/Routes';
import BookProvider from './components/context/BookContext';
import { ToastContainer } from 'react-toastify';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </BookProvider>
  </StrictMode>,
)
