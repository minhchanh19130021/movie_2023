import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import * as userService from '~/services/userService';
import { SignUpModal } from '../SignUpModal';
import { loginSuccess, logoutSuccess } from '~/redux/authSlice';

function SignInModal({ isOpen, onClose }) {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useSelector((state) => state?.authentication?.login?.currentUser);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const notifyWarning = (msg) => {
        toast.warning(msg, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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

    if (!isOpen) return null;

    const validationSchema = Yup.object({
        username: Yup.string()
        .min(2, "Tối thiểu 2 kí tự")
        .matches(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/, 'Tên người dùng chỉ được chứa chữ cái và chữ số')
        .required("Tên tài khoản không được để trống"),
       password: Yup.string()
        .min(4, "Mật khẩu tối thiểu 4 kí tự")
        .required("Mật khẩu không được để trống")
    });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="z-50 rounded-lg bg-[#323232] px-8 py-2">
                <div className="mt-2 flex justify-end">
                    <button className="text-gray-500 hover:text-[#d2d2d2]" onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mb-10">
                    <p className="text-2xl font-medium">Đăng nhập</p>
                </div>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        const res = userService
                            .login(values.username, values.password)
                            .then((response) => {
                                console.log(response);
                                dispatch(
                                    loginSuccess({
                                        id: response?.id,
                                        username: response?.name,
                                        email: response?.email,
                                        accessToken: response?.jwt,
                                        role: response?.role,
                                    }),
                                );
                                onClose()
                            })
                            .catch((err) => console.log(err));
                    }}
                >
                    <Form className="login-form">
                        <div className="form-group mb-4">
                            <Field
                                name="username"
                                placeholder="Tên tài khoản"
                                type="text"
                                className="h-[48px] w-[336px] rounded-lg border border-[#111] bg-[#111] p-4 text-sm outline-none"
                            />
                            <ErrorMessage name="username" component="div" className="text-red-500" />
                        </div>
                        <div className="form-group mb-4">
                            <Field
                                name="password"
                                placeholder="Mật khẩu"
                                type="password"
                                className="h-[48px] w-[336px] rounded-lg border border-[#111] bg-[#111] p-4 text-sm outline-none"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500" />
                        </div>
                        {/* Other form fields */}
                        {/* Submit button */}
                        <button
                            type="submit"
                            //   disabled={isSubmitting}
                            className="my-4 h-[48px] w-full rounded-lg bg-orange-600 px-4 py-2 transition-colors disabled:bg-[#2c2c2e]"
                        >
                            Đăng nhập
                        </button>
                    </Form>
                </Formik>
                <div className="">
                    <p className="mb-6 text-center text-sm">Hoặc đăng nhập bằng</p>
                    <div className="flex items-center justify-center">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALaSURBVHgBzZg/aBNxFMffpQlJVUo6tlA4HZtChU7qYASFCBbqYF3jYEcVFNwUO7fYuHbRTZFIwMFCA01BO4iSCsaxFxHqaBCEtGn7831zd+nlmjTvlzRpP/Ca5pd3d9+8P7/LO4M0UUqZ/DLFNs4WZ4s6BkpsRcdW2TKGYRSpG7CQJNuK0iePY+mo4JPF2SzVOVZHwvjgKNtzdfTgnFFdMaayQ90tLGXXoliMpbqP1VKUstNkqd6BLNSlL+DT9JTNpN5x3rnmQZTd1sdF3NVheARZ1NvoeCnyBnoW/wQdMUldMWsbu7T0o0JLhV369WevujY2HKDYUB89vBqmkUFD53RopCSLemk4gvJk57Mlf8uK5pa3aPFT5VC/u5dCNDsZIQ1yLOiKoezWs6RHXXvxj75v7ol8EbH0zCkaiIijZaLLpqTeT96XG4oZGQzQ7I0wfX58hpbvnabpiVB1Hb6IpgY3UUOXJZ6ok2ZpQhTcmsGrt35wTCIWoovn+kjAOASZEs+57HbD9dhQoCYAhb74cZsKv+ujiOIXCooHpIL8F3EZ6N+Pxnx2iy++U+u6miDuRCFRCBLdeQub4pMewC/wEKJBapMLnIJ3XDte0s57FH+rbaEZiFBJ4ohOkuJPL+pMSEksKDFaX5QFbukHb8vVInaZ58LHmn9rGBsWFTQoQtCqxBOt6wU79puvFfrAReyytrFTXcNnXtx9ScBPCFqXeKJtE6P6JXd7QrwHgRwEZaTeqemIVi1Vd/DJMGmQCThzU07ijXtSeqZflAJ0Yfa+1n1sHVrcHLwie+hrCb516laErseC9PpLhbyXwyYJIY/454dGmlxS+HPifqB5C+IOHR/PGq5ylBZU71loKlPZY1A3B0Q/lmo1xaqTNCj2UFReLMaXvm7UFM6p97DBJwwDpKU6x1KegbBjHGHtFPyK0ngupDXNOcJMsicVDAemY95HerAc2zdq45Hef4npH9ivTtQ/AAAAAElFTkSuQmCC"
                            alt="facebook-img-login"
                            className="mx-4 cursor-pointer"
                        />
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANtSURBVHgBzZhfSFNRHMd/d04nc+l6aGoPesX+PBgpiPgQ1OiPBYqZQSA+NB8k0oesIOrFP0Uv9lBC9VCEvglChCRBEmx7KOiPNSmDqLUZmGwSG86Fburpd+68l6l37py7OfrAb/fec7/n7rvfOTv3nCMAJ4QQMx6aMI5gVGHQazFO4sIIYjgxHIIgOGC7QDNWDDvhx4NhwxAhXdCHaTSjZq4LUgUfcgkjQNKLh2jNGlYcJNuHB6PqfzIkE2A2hsK7JHNQY2IyQzaSeTwkNswo6OIMiXjogcwjYqj/K0lm+tFWiLIXYc0QLfAAByQcgqjrIyy9cULENSGVZRXtBn35XjCebQFdYTFwMoCjf1e8qUE82FhrRycnINR/E1Z8swk1uXUNkHe+ncccfTWVobGg3KesrDUXx8cgePXiloZkXdT9DTignd1GTwQSGys+sdRaRSN/Wk+vK8uurMas1GPTFcOy+zv8fTos6fKvdYMBs8XJKGaqiTZdF2tPDHScIv5jNVLMNR4lEdcHVV2icpavoM5o84ksP4EEnGBqfgWGGr90beq8LGVJjUTlDJjRmFmPJ5UsajI3Kh2Nx2dAX1oodeR4fvhXYWGRJKxfVZIFjBToWZWwOK2cGg4f2HT74XgEJn+tqFY15QowesUIjJTpQAOCvoBLv1UG1aCZCjIpc0uV0/n5r2DecHtPoW6TETc2KYVmioMgNTXNohRMsVmGc6kIbv80wJ2SKai2VCj3O07krNP3P19STJVbuBrES9VeFqVgaYQnkVq4HqqFEMmGvnf3YTY8p6p1+1bh5edl5frkQeau65VHdAeTXG+G/PIbyiU1dMHeDWNeh2JuNuyHx1Mj0PFiWNEVFQg8pibph/zuo4OWmaVW39sHaMSeVJcTrAND4Azcat4Jh/Yxm2rDTA3JjT3AWqunthPaK84l1Rl2vYbeVh+PIYqDfmieutCmevRlBJwz7yEUDSvlxUYLNJRZoWV/PezIzuN4IgxhltrWlaCxIaKR+cgC+b3gk44pIG6ySWKLznSv8VjpTZg/wjFjSCPJuw2K7pHM4SGsq2WSQv/igH0xmqGMebgNxRnrJenHTlLdFiKxf+Uzkjq0uVLfCtpgzqrRHDVDM870GqNwTXTWzIkQW5LRoJMseYuRElwLusVIX66athf/AT7zI6BitzPdAAAAAElFTkSuQmCC"
                            alt="google-img-login"
                            className="mx-4 cursor-pointer"
                        />
                    </div>
                    <div className="mt-10 flex items-center justify-center py-4">
                        <p className="text-sm">Chưa có tài khoản?</p>
                        <strong className="mx-1  cursor-pointer text-orange-600" onClick={openModal} >
                            Đăng ký miễn phí
                        </strong>
                    </div>
                    <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
        </div>
    );
}

export default SignInModal;
