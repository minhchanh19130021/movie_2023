
function NotFound() {
    return (
        <div className="flex h-screen flex-wrap items-center justify-center bg-black py-5">
            <div className="my-5 text-center">
                <h1 className="text-8xl	font-semibold text-white">404</h1>
                <div className="my-5">
                    <h3 className="text-xl font-medium text-gray-300">Trang này đã bị xóa hoặc không tồn tại!</h3>
                </div>
                <a
                    href="/"
                    className="cursor-pointer rounded-lg bg-[#ff6500] px-8 py-2 text-base font-semibold leading-tight text-white hover:bg-[#ff6520]"
                >
                    Về trang chủ
                </a>
            </div>
        </div>
    );
}
export default NotFound;
