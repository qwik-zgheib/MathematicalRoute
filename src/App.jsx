import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import router from './routes/routes'

const App = () => {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  )
}

export default App
