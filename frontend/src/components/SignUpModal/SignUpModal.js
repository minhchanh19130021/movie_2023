import React, { useEffect, useState } from 'react';
import { Verify } from '../Verify';
import { ModalAlert } from '../ModalAlert';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as userService from '~/services/userService';
import { useNavigate } from 'react-router-dom';

function SignUpModal({ isOpen, onClose }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenVerify, setIsModalOpenVerify] = useState(false);

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
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

    if (!isOpen) return null;

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(2, 'Tối thiểu 2 kí tự')
            .matches(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/, 'Tên người dùng chỉ được chứa chữ cái và chữ số')
            .required('Tên tài khoản không được để trống'),
        email: Yup.string().required('Email không được để trống')
        .email("Vui lòng nhập đúng định dạng email!"),
        password: Yup.string()
        .min(4, 'Mật khẩu tối thiểu 4 kí tự')
        .required('Mật khẩu không được để trống'),
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
                    <p className="text-2xl font-medium">Đăng ký</p>
                </div>
                {/* <div className=""> */}
                    <Formik
                        initialValues={{ username: '', email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            const res = userService
                                .register(values.username, values.email, values.password)
                                .then((response) => {
                                    console.log(response?.data)
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
                                    placeholder="Địa chỉ email"
                                    type="text"
                                    name="email"
                                    className="h-[48px] w-[336px] rounded-lg border border-[#111] bg-[#111] p-4 text-sm outline-none"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
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
                    {/* <Verify isOpenVerify={isModalOpenVerify} onCloseVerify={() => setIsModalOpenVerify(false)} /> */}
                    <ModalAlert isOpenVerify={isModalOpenVerify} onCloseVerify={() => setIsModalOpenVerify(false)} />
                </div>
            </div>
        // </div>
    );
}

export default SignUpModal;
