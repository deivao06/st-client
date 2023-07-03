import {FC} from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";

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
]