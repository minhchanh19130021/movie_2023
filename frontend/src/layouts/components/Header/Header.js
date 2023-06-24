import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="max-w-full ">
            <div className="mx-auto flex max-w-[1520px] items-center justify-between ">
                <div className="left flex h-[74px] items-center">
                    <NavLink to="/">
                        <img src="https://ophim8.cc/logo-ophim-6.png" alt="" />
                    </NavLink>
                    <div className="search ml-4 border-none">
                        <div className="search-input flex items-center rounded-full border-2 px-4 py-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-5 w-5 text-slate-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>

                            <input type="text" className="border-none bg-transparent text-slate-500 outline-none" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="menu">
                        <NavLink to="" className="px-4 font-bold text-gray-500 hover:text-blue-400">
                            Phim bộ
                        </NavLink>
                        <NavLink to="" className="px-4 font-bold text-gray-500 hover:text-blue-400">
                            Phim lẻ
                        </NavLink>
                        <NavLink to="" className="px-4 font-bold text-gray-500 hover:text-blue-400">
                            Hoạt hình
                        </NavLink>
                        <NavLink to="" className="px-4 font-bold text-gray-500 hover:text-blue-400">
                            Thể loại
                        </NavLink>
                        <NavLink to="" className="px-4 font-bold text-gray-500 hover:text-blue-400">
                            Quốc gia
                        </NavLink>
                        <NavLink to="" className="px-4 font-bold text-gray-500 hover:text-blue-400">
                            Sắp chiếu
                        </NavLink>
                         <NavLink to="login" className="px-4 font-bold text-gray-500  bg-blue-400 text-white py-2 rounded-full">
                            Đăng nhập
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
