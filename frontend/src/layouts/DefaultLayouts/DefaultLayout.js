import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper flex min-h-screen flex-col items-center items-stretch	justify-center bg-black">
            <div className="header border-b border-slate-100 shadow-md">
                <div className="fixed top-0 z-50 h-[116px] w-full  bg-black shadow-lg">
                    <Header />
                </div>
            </div>
            <div className="mb-auto mt-2 h-full pt-[116px]">{children}</div>
            <div className="h-full">
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
