import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import * as adminService from '~/services/adminService';

const validationSchema = Yup.object().shape({
    movie_id: Yup.number().required('Required'),
    summary: Yup.string().required('Required'),
    trailer_url: Yup.string().required('Required'),
    lang: Yup.string().required('Required'),
    quality: Yup.string().required('Required'),
    episode_total: Yup.number().required('Required').integer('Must be an integer'),
    episode_current: Yup.number().required('Required').integer('Must be an integer'),
    duration: Yup.string().required('Required'),
    view: Yup.number().required('Required').integer('Must be an integer'),
    category: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    actor: Yup.string().required('Required'),
    director: Yup.string().required('Required'),
});

const initialValues = {
    movie_id: 0,
    summary: '',
    trailer_url: '',
    lang: '',
    quality: '',
    episode_total: '',
    episode_current: '',
    duration: '',
    view: '',
    category: '',
    country: '',
    actor: '',
    director: '',
};

const onSubmit = (values, { resetForm }) => {
    if (window.confirm('Are you sure you want to submit?')) {
        console.log(values);
        adminService
            .movieDeatailCreate(
                values.movie_id,
                values.summary,
                values.trailer_url,
                values.lang,
                values.quality,
                values.episode_total,
                values.episode_current,
                values.duration,
                values.view,
                values.category,
                values.country,
                values.actor,
                values.director,
            )
            .then((res) => {window.alert(res)})
            .catch((err) => console.log(err));
    }
    // resetForm();
};

function MovieDetailCreate() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await adminService.getMoviesNonDetail();
            setMovies(res);
        };
        fetchApi();
    }, []);
    return (
      <div className='max-w-full bg-white py-10'>
           <div className='max-w-[1200px] mx-auto'>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="mx-auto mt-10 w-1/2 bg-white text-black ">
                    <div className="mb-4">
                  <label htmlFor="movie_id" className="block font-medium mb-1">
                    Movie ID:
                  </label>
                  <Field
                    as="select"
                    id="movie_id"
                    name="movie_id"
                    className="w-full border border-gray-300 p-2"
                  >
                    <option value={0}>Select a movie</option>
                    {movies?.map((movie) => (
                      <option key={movie.id} value={movie.id}>
                        {movie.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="movie_id" component="div" className="text-red-500" />
                </div>
        
                        <div className="mb-4">
                            <label htmlFor="summary" className="mb-1 block font-medium">
                                Summary:
                            </label>
                            <Field as="textarea" id="summary" name="summary" className="w-full border border-gray-300 p-2" />
                            <ErrorMessage name="summary" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="trailer_url" className="mb-1 block font-medium">
                                Trailer URL:
                            </label>
                            <Field
                                type="text"
                                id="trailer_url"
                                name="trailer_url"
                                className="w-full border border-gray-300 p-2"
                            />
                            <ErrorMessage name="trailer_url" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="lang" className="mb-1 block font-medium">
                                Language:
                            </label>
                            <Field type="text" id="lang" name="lang" className="w-full border border-gray-300 p-2" />
                            <ErrorMessage name="lang" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="quality" className="mb-1 block font-medium">
                                Quality:
                            </label>
                            <Field type="text" id="quality" name="quality" className="w-full border border-gray-300 p-2" />
                            <ErrorMessage name="quality" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="episode_total" className="mb-1 block font-medium">
                                Total Episodes:
                            </label>
                            <Field
                                type="number"
                                id="episode_total"
                                name="episode_total"
                                className="w-full border border-gray-300 p-2"
                            />
                            <ErrorMessage name="episode_total" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="episode_current" className="mb-1 block font-medium">
                                Current Episode:
                            </label>
                            <Field
                                type="number"
                                id="episode_current"
                                name="episode_current"
                                className="w-full border border-gray-300 p-2"
                            />
                            <ErrorMessage name="episode_current" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="duration" className="mb-1 block font-medium">
                                Duration:
                            </label>
                            <Field type="text" id="duration" name="duration" className="w-full border border-gray-300 p-2" />
                            <ErrorMessage name="duration" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="view" className="mb-1 block font-medium">
                                View:
                            </label>
                            <Field type="number" id="view" name="view" className="w-full border border-gray-300 p-2" />
                            <ErrorMessage name="view" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="category" className="mb-1 block font-medium">
                                Category:
                            </label>
                            <Field type="text" id="category" name="category" className="w-full border border-gray-300 p-2" />
                            <ErrorMessage name="category" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="country" className="mb-1 block font-medium">
                                Country:
                            </label>
                            <Field type="text" id="country" name="country" className="w-full border border-gray-300 p-2" />
                            <ErrorMessage name="country" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="actor" className="mb-1 block font-medium">
                                Actor:
                            </label>
                            <Field type="text" id="actor" name="actor" className="w-full border border-gray-300 p-2" />
                            <ErrorMessage name="actor" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mb-4">
                            <label htmlFor="director" className="mb-1 block font-medium">
                                Director:
                            </label>
                            <Field type="text" id="director" name="director" className="w-full border border-gray-300 p-2" />
                            <ErrorMessage name="director" component="div" className="text-red-500" />
                        </div>
        
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="rounded bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400 outline-none"
                                disabled={false} // Update this to the correct condition to enable/disable the button
                            >
                                Nhập cho đúng rồi hãy nhấn vào
                            </button>
                        </div>
                    </Form>
                </Formik>
           </div>
      </div>
    );
}

export default MovieDetailCreate;
