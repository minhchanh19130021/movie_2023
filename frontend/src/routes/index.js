import config from '~/config';
import { FavorateMovie } from '~/pages/Account/FavoriteMovie';
import { HistoryMovie } from '~/pages/Account/HistoryMovie';
import { PersonalInformation } from '~/pages/Account/PersonalInformation';
import { MovieCreate } from '~/pages/Admin/Movie/MovieCreate';
import { MovieDetailCreate } from '~/pages/Admin/Movie/MovieDetailCreate';
import { MovieList } from '~/pages/Admin/MovieList';
import { Upload } from '~/pages/Admin/Upload';
import { Home } from '~/pages/Home';
import { Order } from '~/pages/Home/Order';
import { NotFound } from '~/pages/NofFound';
import { Search } from '~/pages/Search';
import { SearchResult } from '~/pages/SearchResult';
import { ServerError } from '~/pages/ServerError';
import { TypeSearch } from '~/pages/TypeSearch';
import { View } from '~/pages/View';

const publicRoutes = [
    // basic route
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.searchResult, component: SearchResult },
    { path: config.routes.videoView, component: View },
    { path: config.routes.typeSearch, component: TypeSearch },


    // exception route
    { path: config.routes.notFound, component: NotFound },
    { path: config.routes.serverError, component: ServerError },
];
const privateRoutes = [
    // user route
    { path: config.routes.historyMovie, component: HistoryMovie },
    { path: config.routes.favorateMovie, component: FavorateMovie },
    { path: config.routes.personalInformation, component: PersonalInformation },
    { path: config.routes.order, component: Order },

    //support add movie route
    { path: config.routes.movieCreate, component: MovieCreate },
    { path: config.routes.movieDetailCreate, component: MovieDetailCreate },
    { path: config.routes.movieList, component: MovieList },
    { path: config.routes.movieUpload, component: Upload },
];
export { privateRoutes, publicRoutes };

