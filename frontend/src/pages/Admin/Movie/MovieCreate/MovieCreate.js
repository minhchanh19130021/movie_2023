import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as adminService from '~/services/adminService';
const MovieCreate = () => {
    const formik = useFormik({
        initialValues: {
            slug: '',
            poster: '',
            name: '',
            subname: '',
            release_date: '',
            type: [],
            status: '',
        },
        validationSchema: Yup.object({
            slug: Yup.string().required('Thông tin bắt buộc'),
            poster: Yup.string().required('Thông tin bắt buộc'),
            name: Yup.string().required('Thông tin bắt buộc'),
            subname: Yup.string().required('Thông tin bắt buộc'),
            release_date: Yup.date().required('Thông tin bắt buộc'),
            // type: Yup.string().required('Thông tin bắt buộc'),
            status: Yup.string().required('Thông tin bắt buộc'),
        }),
        onSubmit: (values, { resetForm }) => {
            const selectedTypes = values.type.join(', ');
            if (window.confirm('Are you sure you want to submit?')) {
                adminService
                    .movieCreate(
                        values.slug,
                        values.poster,
                        values.name,
                        values.subname,
                        values.release_date,
                        selectedTypes,
                        values.status,
                    )
                    .then((res) => {
                        alert(res);
                        resetForm();
                    })
                    .catch((errors) => console.log(errors));
            }
        },
    });

    return (
        <div className="max-w-full bg-white py-10">
            <div className="mx-auto max-w-[1200px]">
                <form onSubmit={formik.handleSubmit} className="mx-auto max-w-xl  bg-transparent">
                    <div className="mb-4">
                        <label htmlFor="name" className="text-black">
                            Name:
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...formik.getFieldProps('name')}
                            className="w-full  border bg-transparent px-4 py-2 text-black outline-none"
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-500">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subname" className="text-black">
                            Subname:
                        </label>
                        <input
                            id="subname"
                            type="text"
                            {...formik.getFieldProps('subname')}
                            className="w-full  border bg-transparent px-4 py-2 text-black outline-none"
                        />
                        {formik.touched.subname && formik.errors.subname ? (
                            <div className="text-red-500">{formik.errors.subname}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="slug" className="text-black">
                            Slug:
                        </label>
                        <input
                            id="slug"
                            type="text"
                            {...formik.getFieldProps('slug')}
                            className="w-full  border bg-transparent px-4 py-2 text-black outline-none"
                        />
                        {formik.touched.slug && formik.errors.slug ? (
                            <div className="text-red-500">{formik.errors.slug}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="poster" className="text-black ">
                            Poster:
                        </label>
                        <input
                            id="poster"
                            type="text"
                            {...formik.getFieldProps('poster')}
                            className="w-full  border bg-transparent px-4 py-2 text-black outline-none"
                        />
                        {formik.touched.poster && formik.errors.poster ? (
                            <div className="text-red-500">{formik.errors.poster}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="release_date" className="text-black">
                            Release Date:
                        </label>
                        <input
                            id="release_date"
                            type="datetime-local"
                            {...formik.getFieldProps('release_date')}
                            className="w-full  border bg-transparent px-4 py-2 text-black outline-none"
                        />
                        {formik.touched.release_date && formik.errors.release_date ? (
                            <div className="text-red-500">{formik.errors.release_date}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="movie_name" className="text-black">
                            Status:
                        </label>
                        <select
                            id="type"
                            {...formik.getFieldProps('type')}
                            className="w-full  border bg-transparent px-4 py-2 text-black outline-none"
                            multiple={true}
                        >
                            <option value="">Select a type</option>
                            <option value="Tình cảm">Tình cảm</option>
                            <option value="Kinh dị">Kinh dị </option>
                            <option value="Hành động">Hành động</option>
                            {/* Add more options here */}
                        </select>
                        {formik.touched.type && formik.errors.type ? (
                            <div className="text-red-500">{formik.errors.type}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="text-black">
                            Type:
                        </label>
                        <select
                            id="status"
                            {...formik.getFieldProps('status')}
                            className="w-full  border bg-transparent px-4 py-2 text-black outline-none"
                            multiple={false}
                        >
                            <option value="">Select a status</option>
                            <option value="Sắp Chiếu">Sắp Chiếu</option>
                            <option value="Đang chiếu">Đang chiếu </option>
                            <option value="Đã chiếu">Đã chiếu</option>

                            {/* Add more options here */}
                        </select>
                        {formik.touched.status && formik.errors.status ? (
                            <div className="text-red-500">{formik.errors.status}</div>
                        ) : null}
                    </div>

                    <button
                        type="submit"
                        disabled={!formik.isValid}
                        className="rounded bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400 outline-none"
                    >
                        Nhập cho đúng rồi hãy nhấn vào
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MovieCreate;
