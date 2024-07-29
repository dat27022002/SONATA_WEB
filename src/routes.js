import Home from '~/pages/Home';
import Menu from '~/pages/Menu';
import Login from '~/pages/Login';

export const publicRoute = [
    { path: 'Home', component: Home },
    { path: 'Menu', component: Menu },
    { path: 'Login', component: Login },
];
export const privateRoute = [];
