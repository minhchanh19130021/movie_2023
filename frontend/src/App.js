import { useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayouts';
import { Home } from './pages/Home';
import { NotFound } from './pages/NofFound';
import { privateRoutes, publicRoutes } from './routes';

function App() {
    const user = useSelector((state) => state?.authentication?.login?.currentUser);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Public routes */}
                    {publicRoutes?.map((route, index) => {
                        // ... Code for determining Layout
                        const Layout = DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    {/* Private routes */}
                    {privateRoutes?.map((route, index) => {
                        const Layout = DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    user ? (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    ) : (
                                        <Navigate to="/home" replace={true} />
                                    )
                                }
                            />
                        );
                    })}
                    <Route
                        path="/home"
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path="*"
                        element={
                                <NotFound />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
