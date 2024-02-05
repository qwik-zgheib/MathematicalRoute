import { createBrowserRouter } from 'react-router-dom'

import Limits from '../components/Limits'
import { Derivadas } from '../components/Derivadas'
import { Funciones } from '../components/Funciones'
import { Integrales } from '../components/Integrales'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'

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
            element: <Funciones />,
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
