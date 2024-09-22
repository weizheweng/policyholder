import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <></>,
      children: [],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
