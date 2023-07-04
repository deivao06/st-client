import {FC} from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Page404 from "./pages/404";

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: true,
        component: Login
    },
    {
        key: 'register-route',
        title: 'Register',
        path: '/register',
        enabled: true,
        component: Register
    },
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: '404-route',
        title: '404',
        path: '*',
        enabled: true,
        component: Page404
    }
]