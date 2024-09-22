import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { FirstLevel } from './components/PolicyholderLevel/FirstLevel'
import './global.css'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Navigate to="/policyholder" replace /> },
        { path: '/policyholder', element: <FirstLevel /> },
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
