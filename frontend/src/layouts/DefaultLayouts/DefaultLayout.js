import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="header border-b border-slate-100 shadow-md">
                <div className="h-[74px] fixed top-0 w-full bg-white shadow-lg z-50">
                    <Header />
                </div>
            </div>
            <div className="mb-auto h-full pt-[74px]">{children}</div>
            <div className="mt-10 h-full ">
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
