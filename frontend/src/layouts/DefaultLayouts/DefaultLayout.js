import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";

function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="h-[84px] bg-[#016cc9]">
          <Header />
        </div>
      </div>
      <div className="mb-auto h-full ">{children}</div>
      <div className="mt-10 h-full ">
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
