import { createBrowserRouter } from 'react-router-dom'

import NavbarMenu from '../components/NavbarMenu'
import Functions from '../components/Functions'
import Limits from '../components/Limits'

import { Derivadas } from '../components/Derivadas'
import { Integrales } from '../components/Integrales'
import Landing from '../pages/Landing'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/home',
    element: <NavbarMenu />,
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
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
