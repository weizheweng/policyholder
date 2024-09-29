import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { PolicyholderProvider } from './components/PolicyholderProvider/PolicyholderProvider'
import './global.css'
import { PolicyholderPage } from './components/Policyholder/PolicyholderPage'

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
              <PolicyholderPage />
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
