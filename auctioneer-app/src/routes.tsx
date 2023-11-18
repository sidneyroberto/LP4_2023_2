import { RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import Auction from './pages/Auction'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auction',
    element: <Auction />
  }
]

export default routes