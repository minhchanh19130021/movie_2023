import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { loginSuccess } from '~/redux/authSlice';
import * as userService from '~/services/userService';
import FacebookLoginButton from '../Button/FacebookLoginButton';
import { SignUpModal } from '../SignUpModal';
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
        const handleFacebookLogin = (name) => {
            // Handle the Facebook access token in your app
            axios.get(`https://graph.facebook.com/me?access_token=${name}`)
                .then((response) => {
                    // Handle the response from the Facebook API
                    console.log(response.data);
                    axios.get('/api/auth/get-by-username?username=' + response?.data?.name,{
                      username: response?.data?.name,
                    }).then(r => {
                      console.log(r.data);
                      if (r.data === undefined || r.data === null || r.data === '') {
                        axios.post('/api/auth/register-for-social', {
                          username: response?.data?.name,
                          email: response?.data?.name + '@gmail.com',
                          password: response?.data?.name,
                          role: '1',
                          flagActive: 1,
                        }).then(r => {
                          console.log(r.data);
                        })
                      }
                    });
                    // navigate to home page
                    dispatch(
                        loginSuccess({
                            id: response?.id,
                            username: response?.data?.name,
                            email: response?.data?.email,
                            accessToken: response?.jwt,
                            role: response?.role,
                            flagActive: response?.flagActive,
                        }),
                    );
                    onClose();

                })
                .catch((error) => {
                    // Handle the error
                    console.error(error);
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
            .min(2, 'Tối thiểu 2 kí tự')
            .matches(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/, 'Tên người dùng chỉ được chứa chữ cái và chữ số')
            .required('Tên tài khoản không được để trống'),
        password: Yup.string().min(4, 'Mật khẩu tối thiểu 4 kí tự').required('Mật khẩu không được để trống'),
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
                                if(response)
                                {
                                    if(response?.role == 0){
                                        console.log(response);                         
                                        dispatch(
                                            loginSuccess({
                                                id: response?.id,
                                                username: response?.name,
                                                email: response?.email,
                                                accessToken: response?.jwt,
                                                role: response?.role,
                                                flagActive: response?.flagActive,
                                            }),
                                        );
                                        onClose();
                                        navigate('/quan-ly-phim/danh-sach')
                                    }
                                    else{
                                        console.log(response);                         
                                        dispatch(
                                            loginSuccess({
                                                id: response?.id,
                                                username: response?.name,
                                                email: response?.email,
                                                accessToken: response?.jwt,
                                                role: response?.role,
                                                flagActive: response?.flagActive,
                                            }),
                                        );
                                        onClose();
                                        navigate('/')

                                    }
                                    
                                }
                                else{
                                    alert('Sai thông tin đăng nhập');
                                }
                            })
                            .catch((error) => {
                                alert('Sai thông tin đăng nhập');
                            });
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
                        <FacebookLoginButton onFacebookLogin={handleFacebookLogin} />
                    </div>
                    <div className="mt-10 flex items-center justify-center py-4">
                        <p className="text-sm">Chưa có tài khoản?</p>
                        <strong className="mx-1  cursor-pointer text-orange-600" onClick={openModal}>
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