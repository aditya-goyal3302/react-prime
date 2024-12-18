import { RouteObject } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import Home from './pages/home'

const route = () => {

    const routes: RouteObject[] = [
        {
            path: '/',
            element: <BaseLayout />,
            children: [
                {
                    path:'/',
                    element: <Home />
                }
            ]
        }
    ]
    return routes
}
export default route