import config from '~/config';
import { Home } from '~/pages/Home';
import { SignIn } from '~/pages/SignIn';
import { Detail } from '~/pages/Detail';
import { Search } from '~/pages/Search';
import { SignUp } from '~/pages/SignUp';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.signIn, component: SignIn },
    { path: config.routes.signUp, component: SignUp },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.search, component: Search },

];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
