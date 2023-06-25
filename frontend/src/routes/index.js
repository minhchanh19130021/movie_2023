import config from '~/config';
import { Home } from '~/pages/Home';
import { Detail } from '~/pages/Detail';
import { Search } from '~/pages/Search';
import { Login } from '~/pages/Login';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.search, component: Search },
    { path: config.routes.login, component: Login },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
