import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { FirstLevel } from './components/PolicyholderLevel/FirstLevel'
import { PolicyholderProvider } from './components/PolicyholderProvider/PolicyholderProvider'
import './global.css'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Navigate to="/policyholder" replace /> },
        {
          path: '/policyholder',
          element: (
            <PolicyholderProvider>
              <FirstLevel />
            </PolicyholderProvider>
          ),
        },
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
