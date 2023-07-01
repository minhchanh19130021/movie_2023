import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper bg-black">
            <div className="header border-b border-slate-100 shadow-md">
                <div className="h-[116px] fixed top-0 w-full bg-black  shadow-lg z-50">
                    <Header />
                </div>
            </div>
            <div className="mb-auto h-full pt-[116px] mt-2">{children}</div>
            <div className= "h-full ">
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
