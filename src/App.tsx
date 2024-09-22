import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import './global.css'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
