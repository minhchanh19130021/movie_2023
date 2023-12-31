import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutSuccess } from '~/redux/authSlice';
import * as userService from '~/services/userService';

function PersonalInformation() {
    const user = useSelector((state) => state?.authentication?.login?.currentUser);
    console.log(user);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    useEffect(() => {
        show();
     }, []);
    function show() {
        if (user?.flagActive === 1) {
            return  false;
        } else return  true;
    }
    const [hidden, setHidden] = useState(false);
    // const [showElement, setShowElement] = useState(false);
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        setCode(event.target.value);

        console.log('value is:', event.target.value);
    };
    return (
        <div className="max-w-full">
            <div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-4">
                <div className="flex flex-col">
                    <NavLink
                        to="/tai-khoan/thong-tin-ca-nhan"
                        className="border-l-2 border-white px-4 py-2 text-sm font-medium"
                    >
                        Thông tin cá nhân
                    </NavLink>
                    <NavLink to="/tai-khoan/lich-su-da-xem" className="px-4 py-2 text-sm text-[#a6a6a6]">
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
                <div className="col-span-3">
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
                        <div>
                            { show() ? (
                                <div className="flex items-center border-b border-[#2c2c2e] py-7 text-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[#616161]">Nhập mã kích hoạt tài khoản: </p>
                                        <input
                                            name="codeVerify"
                                            type="text"
                                            values={code}
                                            onChange={handleChange}
                                            className="border border-transparent bg-transparent px-4 py-2 outline-none"
                                            placeholder="Nhập mã kích hoạt"
                                        />
                                    </div>
                                    {!hidden && (
                                        <button
                                            className="rounded-lg bg-orange-500 px-4 py-1 transition-colors hover:bg-orange-600"
                                            onClick={(values) => {
                                                const res = userService
                                                    .getVerifyCode(user?.id)
                                                    .then((response) => {
                                                        console.log(response);
                                                        setHidden(true);
                                                    })
                                                    .catch((error) => {
                                                        alert('Lỗi server');
                                                    });
                                            }}
                                        >
                                            Lấy mã kích hoạt
                                        </button>
                                    )}
                                    <div>
                                        {hidden ? (
                                            <button
                                                className="rounded-lg bg-orange-500 px-4 py-1 transition-colors hover:bg-orange-600"
                                                onClick={(values) => {
                                                    const resVerycode = userService
                                                        .verifyCode(code, user?.email)
                                                        .then((response) => {
                                                            console.log(response);
                                                            alert('Xác thực thành công');
                                                            navigate('/');
                                                        })
                                                        .catch((error) => {
                                                            alert('Mã xác thực không đúng');
                                                        });
                                                }}
                                            >
                                                Xác nhận
                                            </button>
                                        ) : null}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInformation;
