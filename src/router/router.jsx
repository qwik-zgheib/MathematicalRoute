import { createBrowserRouter } from 'react-router-dom'

import Functions from '../components/Functions'
import Limits from '../components/Limits'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'

import { Derivadas } from '../components/Derivadas'
import { Integrales } from '../components/Integrales'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '',
        element: <Menu />,
        children: [
          {
            path: 'functions',
            element: <Functions />,
          },
          {
            path: 'limits',
            element: <Limits />,
          },
          {
            path: 'derivatives',
            element: <Derivadas />,
          },

          {
            path: 'integrals',
            element: <Integrales />,
          },
        ],
      },
    ],
  },
])

export default router
