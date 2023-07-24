import { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkUserIdInOrder, saveNewOrder } from '~/services/orderServices';

function Order() {
    const navigate = useNavigate();
    const user = useSelector((state) => state?.authentication?.login?.currentUser);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (!user?.accessToken) {
            navigate('/');
        } else {
            checkUserIdInOrder(user?.accessToken)
                .then((e) => {
                    if (e?.data) {
                        navigate('/');
                    } else {
                        setIsLogin(true);
                    }
                })
                .catch((e) => {
                    navigate('/');
                });
        }
    }, []);

    return (
        isLogin && (
            <div className="max-w-full">
                <div className="mx-auto max-w-[1200px]">
                    <div className="flex justify-between">
                        <div className="basis-2/4">
                            <div>
                                <p className="text-2xl	font-bold">Thanh toán</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold">Chọn thời hạn gói</p>
                                <div className="my-3 flex items-center justify-between rounded-lg bg-[#161616] px-5 py-1">
                                    <div className="flex items-center">
                                        <div className="m-2 h-6 w-6 rounded-full bg-[#ff6500] text-blue-500"></div>
                                        <p className="text-[14px]">Trọn đời</p>
                                    </div>
                                    <p className="text-[14px]">100$</p>
                                </div>
                            </div>
                            <div>
                                <p className="my-5 text-lg font-bold">Chọn hình thức thanh toán</p>
                                <PayPalButton
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        currency_code: 'USD',
                                                        value: '0.01',
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then(function (details) {
                                            const load = saveNewOrder(data?.orderID, user?.accessToken);
                                            load.then((e) => {
                                                if (e?.status === 200) {
                                                    navigate('/');
                                                } else {
                                                    navigate('/server-error');
                                                }
                                            }).catch((e) => {
                                                navigate('/server-error');
                                            });
                                        });
                                    }}
                                    catchError={() => {
                                        navigate('/server-error');
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mx-8 basis-2/4">
                            <div>
                                <p className="p-2 text-lg font-bold">Thông tin thanh toán</p>
                                <div className="rounded-lg bg-[#161616] p-4">
                                    <div className="flex justify-between">
                                        <span className="font-300">Tài khoản </span>
                                        <span>0707342530</span>
                                    </div>
                                    <div className="my-4 h-1 w-full bg-[#585858]"></div>
                                    <div className="flex justify-between">
                                        <span>Tên gói</span>
                                        <span>Gói SMAX</span>
                                    </div>
                                    <div className="my-2 h-1 w-full"></div>
                                    <div className="flex justify-between">
                                        <span>Thời hạn gói </span>
                                        <span>1 Tháng</span>
                                    </div>
                                    <div className="my-2 h-1 w-full"></div>
                                    <div className="flex justify-between">
                                        <span>Dịch vụ </span>
                                        <span>Gói dịch vụ FPT Play</span>
                                    </div>
                                    <div className="my-4 h-1 w-full bg-[#585858]"></div>
                                    <div className="flex justify-between">
                                        <span>Giá gói</span>
                                        <span>100$</span>
                                    </div>
                                    <div className="my-4 h-1 w-full bg-[#585858]"></div>
                                    <div className="flex justify-between">
                                        <span>Giảm giá</span>
                                        <span>0 VND</span>
                                    </div>
                                    <div className="my-4 h-1 w-full bg-[#585858]"></div>
                                    <div className="flex justify-between">
                                        <p>Tổng thanh toán: </p>
                                        <p className="text-[24px] font-[600] text-[#ff6500]">100$</p>
                                    </div>
                                    <div>
                                        <p className="my-4 text-center text-[14px]">
                                            Bằng việc chấp nhận thanh toán, Khách Hàng đã đồng ý với Điều kiện và điều
                                            khoản sử dụng dịch vụ truyền hình FPT Play, và ủy quyền cho FPT Play tự động
                                            gia hạn khi hết hạn sử dụng
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Order;
