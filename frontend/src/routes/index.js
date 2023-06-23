import config from '~/config';
import { Home } from '~/pages/Home';
import { SignIn } from '~/pages/SignIn';
import { Detail } from '~/pages/Detail';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.signIn, component: SignIn },
    { path: config.routes.detail, component: Detail },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
