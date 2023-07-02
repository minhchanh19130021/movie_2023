import config from '~/config';
import { FavorateMovie } from '~/pages/Account/FavoriteMovie';
import { HistoryMovie } from '~/pages/Account/HistoryMovie';
import { PersonalInformation } from '~/pages/Account/PersonalInformation';
import { Home } from '~/pages/Home';
import { Search } from '~/pages/Search';
import SearchResult from '~/pages/SearchResult/SearchResult';
import { SignIn } from '~/pages/SignIn';
import { SignUp } from '~/pages/SignUp';
import { View } from '~/pages/View';
import { NotFound } from '~/pages/NofFound';
import { ServerError } from '~/pages/ServerError';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    // { path: config.routes.signIn, component: SignIn },
    { path: config.routes.signUp, component: SignUp },
    { path: config.routes.search, component: Search },
    { path: config.routes.searchResult, component: SearchResult },
    { path: config.routes.login, component: SignIn },

    { path: config.routes.videoView, component: View },
    { path: config.routes.personalInformation, component: PersonalInformation },
    { path: config.routes.historyMovie, component: HistoryMovie },
    { path: config.routes.personalInformation, component: PersonalInformation },
    { path: config.routes.favorateMovie, component: FavorateMovie },

    { path: config.routes.notFound, component: NotFound },
    { path: config.routes.serverError, component: ServerError },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
