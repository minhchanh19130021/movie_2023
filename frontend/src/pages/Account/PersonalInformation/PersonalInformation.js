import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutSuccess } from '~/redux/authSlice';

function PersonalInformation() {
    const user = useSelector((state) => state?.authentication?.login?.currentUser);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    return (
        <div className="max-w-full">
            <div className="mx-auto max-w-[1200px] grid grid-cols-4 gap-4">
                <div className="flex flex-col">
                    <NavLink to="/tai-khoan/thong-tin-ca-nhan" className="border-l-2 border-white px-4 py-2 text-sm font-medium">
                        Thông tin cá nhân
                    </NavLink>
                    <NavLink
                        to="/tai-khoan/lich-su-da-xem"
                        className="px-4 py-2 text-sm text-[#a6a6a6]"
                    >
                        Lịch sử xem
                    </NavLink>
                    <NavLink to="/tai-khoan/danh-sach-yeu-thich" className="px-4 py-2 text-sm text-[#a6a6a6]">
                        Danh sách yêu thích
                    </NavLink>
                    {/* <NavLink to="" className="px-4 py-2 text-sm text-[#a6a6a6]"
                    onClick={() => {
                        dispatch(logoutSuccess(null));
                        navigate('/');
                    }}
                    >
                        Đăng xuất
                    </NavLink> */}
                </div>
                <div className='col-span-3'>
                    <p className="mb-4 font-medium">Tài khoản và bảo mật</p>
                    <div className="rounded-lg bg-[#0c0c0c] px-6 py-4">
                        <div className="flex items-center border-b border-[#2c2c2e] py-7 text-sm">
                            <p className="text-[#616161]">ID: </p>
                            <p className="mx-2 font-medium">MSTK{user?.id}</p>
                        </div>
                        <div className="flex items-center border-b border-[#2c2c2e] py-7 text-sm">
                            <p className="text-[#616161]">Tài khoản: </p>
                            <p className="mx-2 font-medium">{user?.username}</p>
                        </div>
                        <div className="flex items-center border-b border-[#2c2c2e] py-7 text-sm">
                            <p className="text-[#616161]">Địa chỉ email: </p>
                            <p className="mx-2 font-medium">{user?.email}</p>
                        </div>
                        <div className="flex items-center border-b border-[#2c2c2e] py-7 text-sm">
                            <p className="text-[#616161]">Mật khẩu: </p>
                            <p className="mx-2 font-medium">*********</p>
                        </div>
                        <div className="flex items-center border-b border-[#2c2c2e] py-7 text-sm">
                            <div className='flex items-center justify-between'>
                                <p className="text-[#616161]">Nhập mã kích hoạt tài khoản: </p>
                                <input className='px-4 py-2 outline-none border bg-transparent border-transparent' placeholder='Nhập mã kích hoạt'/>
                            </div>
                            <button className='py-1 px-4 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors'>Lấy mã kích hoạt</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInformation;
