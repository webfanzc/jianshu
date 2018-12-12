import Home from './pages/home/index'
import Detail from './pages/detail/index'

export const router = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/detail/:id',
    component: Detail,
    exact: true
  }
]
