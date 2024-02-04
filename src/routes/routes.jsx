import { createBrowserRouter } from 'react-router-dom'

import { Limits } from '../components/Limits'
import { Derivadas } from '../components/Derivadas'
import App from '../App'
import Navbar from '../components/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '',
        element: <App />,
        children: [
          {
            path: 'limites',
            element: <Limits />,
          },
          {
            path: 'derivadas',
            element: <Derivadas />,
          },
        ],
      },
    ],
  },
])

export default router
