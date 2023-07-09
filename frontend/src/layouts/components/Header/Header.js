import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SignInModal } from '~/components/SignInModal';
import { SignUpModal } from '~/components/SignUpModal';
import { useNavigate } from 'react-router-dom';

function Header() {
    // const renderItems = () => {
    //     const items = [];
    //     for (let i = 1; i <= 5; i++) {
    //         items.push(<ModalResultSearch key={i} index={i} />);
    //     }
    //     return items;
    // };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenUp, setIsModalOpenUp] = useState(false);
    const user = localStorage.getItem('dbUser') !== 'undefined' ? JSON.parse(localStorage.getItem('dbUser')) : null;
    const navigate = useNavigate();


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openModalUp = () => {
        setIsModalOpenUp(true);
    };

    const closeModalUp = () => {
        setIsModalOpenUp(false);
    };
    useEffect(() => {
        if (isModalOpen) {
            // Thêm lớp CSS khi modal được mở
            document.body.classList.add('modal-open');
        } else {
            // Xóa lớp CSS khi modal được đóng
            document.body.classList.remove('modal-open');
        }

        // Cleanup effect
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isModalOpen]);

    return (
        <div className="max-w-full">
            <div className="mx-auto flex h-[45px] max-w-[1200px] items-center justify-start">
                <NavLink to="/">
                    <div className="flex items-center border-r border-slate-100 pr-4 hover:text-orange-500 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                            />
                        </svg>

                        <span className="ml-3 text-sm">FPT Play Box</span>
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className="flex items-center pl-4 hover:text-orange-500 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                            />
                        </svg>

                        <span className="ml-3 text-sm ">Thông tin</span>
                    </div>
                </NavLink>
            </div>
            <div className="mx-auto flex h-[71px] max-w-[1200px] items-center justify-between">
                <div className="left flex items-center">
                    <NavLink to="/">
                        <img src="https://fptplay.vn/images/logo-2.png" alt="fpt-logo" className="h-[29px] w-[125px]" />
                    </NavLink>
                    <div className="menus">
                        <NavLink to="/menu-item" className="px-3 py-3 text-base font-bold hover:text-orange-500">
                            Trang chủ
                        </NavLink>
                        <NavLink
                            to="/menu-item"
                            className="px-3 py-3 text-base font-medium text-[#9b9b9b] hover:text-orange-500"
                        >
                            Truyền hình
                        </NavLink>
                        <NavLink
                            to="/menu-item"
                            className="px-3 py-3 text-base font-medium text-[#9b9b9b] hover:text-orange-500"
                        >
                            Phim lẻ
                        </NavLink>
                        <NavLink
                            to="/menu-item"
                            className="px-3 py-3 text-base font-medium text-[#9b9b9b] hover:text-orange-500"
                        >
                            Phim bộ
                        </NavLink>
                        <NavLink
                            to="/menu-item"
                            className="px-3 py-3 text-base font-medium text-[#9b9b9b] hover:text-orange-500"
                        >
                            Thể thao
                        </NavLink>
                    </div>
                </div>
                <div className="right flex max-w-full items-center justify-between space-x-5">
                    <NavLink to="/tim-kiem">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-[20px] w-[20px] text-white hover:text-orange-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </NavLink>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-[20px] w-[20px] text-white hover:cursor-pointer hover:text-orange-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                    </svg>
                    {user === null ? (
                        <>
                    <button
                        className="flex items-center rounded-lg bg-orange-500 hover:bg-orange-600 px-2 py-2 text-center font-medium leading-4 text-white "
                        onClick={openModalUp}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mr-2 h-[20px] w-[20px]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                            />
                        </svg>
                        Đăng ký miễn phí
                    </button>
                    {/* <NavLink to="/sign-in">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-8 w-8"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </NavLink> */}
                    <button  className="text-white hover:text-orange-500" onClick={openModal}>
                        Đăng nhập
                    </button>
                    </>
                    ):(
                        <div>
                        <NavLink
                            to={`/user/uid=${user?.password}`}
                            className="mx-1 font-bold text-[#71869d] hover:text-[#35509a]"
                        >
                            Tên tài khoản: {user?.username}
                        </NavLink>
                        <button className="mx-1 font-bold text-[#71869d] hover:text-[#35509a]"
                        onClick={()=>{
                            localStorage.removeItem("dbUser")
                            document.cookie = ' jwt =; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                            navigate('/')
                        }}
                        >
                            Đăng xuất</button>
                    </div>
                    )}
                    <SignInModal isOpen={isModalOpen} onClose={closeModal} />
                    <SignUpModal isOpen={isModalOpenUp} onClose={closeModalUp} />
                </div>
            </div>
        </div>
    );
}

export default Header;
