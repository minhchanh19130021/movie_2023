import config from '~/config';
import { FavorateMovie } from '~/pages/Account/FavoriteMovie';
import { HistoryMovie } from '~/pages/Account/HistoryMovie';
import { PersonalInformation } from '~/pages/Account/PersonalInformation';
import { MovieCreate } from '~/pages/Admin/Movie/MovieCreate';
import { MovieDetailCreate } from '~/pages/Admin/Movie/MovieDetailCreate';
import { MovieList } from '~/pages/Admin/MovieList';
import { Home } from '~/pages/Home';
import { Search } from '~/pages/Search';
import { SignIn } from '~/pages/SignIn';
import { SignUp } from '~/pages/SignUp';
import { View } from '~/pages/View';
import { NotFound } from '~/pages/NofFound';
import { ServerError } from '~/pages/ServerError';
import { SearchResult } from '~/pages/SearchResult';

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
    // admin
    { path: config.routes.movieCreate, component: MovieCreate},
    { path: config.routes.movieDetailCreate, component: MovieDetailCreate},
    { path: config.routes.movieList, component: MovieList},


    { path: config.routes.notFound, component: NotFound },
    { path: config.routes.serverError, component: ServerError },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
