import App from "./App";
import {lazy} from 'react';
import Login from "./pages/Login";
import Home from "./pages/Home";
// const Home = lazy(() => import('./pages/Home'));
// const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
export default [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: '*',
                element: <NotFound />,
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    }
];