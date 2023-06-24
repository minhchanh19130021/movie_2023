import config from '~/config';
import { Home } from '~/pages/Home';
import { Login } from '~/pages/Login';
import { Detail } from '~/pages/Detail';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.login, component: Login },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
