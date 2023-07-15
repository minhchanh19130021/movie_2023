import React, { useEffect, useState } from 'react';
import { getMoviesInAdmin } from '~/services/adminService';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [sortBy, setSortBy] = useState('insertedDateDESC');
    const [movieNameQuery, setMovieNameQuery] = useState('');
    const [showLoadMoreMovieButton, setShowLoadMoreMovieButton] = useState(true);
    const [offsetPage, setOffsetPage] = useState(0);
    const [pageSize, setPageSize] = useState(2);

    useEffect(() => {
        loadMoviesInAdmin('', offsetPage, pageSize, sortBy);
    }, []);

    function loadMoviesInAdmin(movieName, offsetPage, pageSize, sortBy) {
        const load = getMoviesInAdmin(movieName, offsetPage, pageSize, sortBy);
        load.then(
            (e) => {
                if (e?.status === 200) {
                    setMovies(e?.data);
                } else {
                }
            },
            () => {},
        );
    }

    function loadMoreMoviesInAdmin() {
        const load = getMoviesInAdmin(movieNameQuery, offsetPage + 1, pageSize, sortBy);
        load.then((e) => {
            if (e?.data.length === 0) {
                setShowLoadMoreMovieButton(false);
                return;
            }
            setPageSize(pageSize + pageSize);
            setMovies([...movies, ...e?.data]);
            setOffsetPage(offsetPage + 1);
        }).catch((e) => {
            // navigate("/server-error")
        });
    }

    function setSortByInsertedDate() {
        let newSortBy;
        if (sortBy === 'insertedDateDESC') {
            setSortBy('insertedDateASC');
            newSortBy = 'insertedDateASC';
        } else {
            setSortBy('insertedDateDESC');
            newSortBy = 'insertedDateDESC';
        }
        setOffsetPage(0);
        loadMoviesInAdmin(movieNameQuery, 0, pageSize, newSortBy);
    }

    function setSortByReviewNumber() {
        let newSortBy;
        if (sortBy === 'numberOfReviewsDESC') {
            setSortBy('numberOfReviewsASC');
            newSortBy = 'numberOfReviewsASC';
        } else {
            setSortBy('numberOfReviewsDESC');
            newSortBy = 'numberOfReviewsDESC';
        }
        setOffsetPage(0);
        loadMoviesInAdmin(movieNameQuery, 0, pageSize, newSortBy);
    }

    function setSortByCommentNumber() {
        let newSortBy;
        if (sortBy === 'numberOfCommentsDESC') {
            setSortBy('numberOfCommentsASC');
            newSortBy = 'numberOfCommentsASC';
        } else {
            setSortBy('numberOfCommentsDESC');
            newSortBy = 'numberOfCommentsDESC';
        }
        setOffsetPage(0);
        loadMoviesInAdmin(movieNameQuery, 0, pageSize, newSortBy);
    }

    function setSortByViewNumber() {
        let newSortBy;
        if (sortBy === 'numberOfViewsDESC') {
            setSortBy('numberOfViewsASC');
            newSortBy = 'numberOfViewsASC';
        } else {
            setSortBy('numberOfViewsDESC');
            newSortBy = 'numberOfViewsDESC';
        }
        setOffsetPage(0);
        loadMoviesInAdmin(movieNameQuery, 0, pageSize, newSortBy);
    }

    return (
        <div className="h-full w-full p-3">
            <div className="mx-4 my-2 flex items-center justify-start">
                <span>Tìm kiếm</span>
                <input
                    className="mx-4 rounded-lg bg-gray-700 px-1 text-white outline-none"
                    value={movieNameQuery}
                    onChange={(e) => {
                        setMovieNameQuery(e.target.value);
                        loadMoviesInAdmin(e.target.value, 0, 2, 'insertedDateDESC');
                    }}
                ></input>
            </div>
            <div className="w-full rounded-lg border p-5">
                <table className="my-3 flex h-full w-full flex-col content-center justify-center">
                    <thead className="w-full">
                        <tr className="flex justify-evenly	">
                            <th className="mx-4 flex flex-1">Tên</th>
                            <th
                                className="flex flex-1"
                                onClick={() => {
                                    setSortByInsertedDate();
                                }}
                            >
                                <span className="cursor-pointer">Ngày sản xuất</span>
                                <span className="mx-2 flex justify-center">
                                    {sortBy === 'insertedDateDESC' ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    ) : sortBy === 'insertedDateASC' ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                            />
                                        </svg>
                                    ) : null}
                                </span>
                            </th>

                            <th
                                className="flex flex-1"
                                onClick={() => {
                                    setSortByCommentNumber();
                                }}
                            >
                                <span className="cursor-pointer">Lượt bình luận</span>
                                <span className="mx-2 flex justify-center">
                                    {sortBy === 'numberOfCommentsDESC' ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    ) : sortBy === 'numberOfCommentsASC' ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                            />
                                        </svg>
                                    ) : null}
                                </span>
                            </th>
                            <th
                                className="flex flex-1"
                                onClick={() => {
                                    setSortByReviewNumber();
                                }}
                            >
                                <span className="cursor-pointer">Lượt đánh giá</span>
                                <span className="mx-2 flex justify-center">
                                    {sortBy === 'numberOfReviewsDESC' ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    ) : sortBy === 'numberOfReviewsASC' ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                            />
                                        </svg>
                                    ) : null}
                                </span>
                            </th>
                            <th
                                className="flex flex-1"
                                onClick={() => {
                                    setSortByViewNumber();
                                }}
                            >
                                <span className="cursor-pointer">Lượt xem</span>
                                <span className="mx-2 flex justify-center">
                                    {sortBy === 'numberOfViewsDESC' ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    ) : sortBy === 'numberOfViewsASC' ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                            />
                                        </svg>
                                    ) : null}
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-100 my-5 border-t">
                        {movies?.map((e, i) => {
                            return (
                                <tr className="flex justify-evenly border-t border-gray-600 py-5" key={i}>
                                    <td className="mx-4 flex flex-1 flex-wrap">
                                        {e?.name} ({e?.subName})
                                    </td>
                                    <td className="flex flex-1">{e?.insertedDate?.substring(0, 10)}</td>
                                    <td className="flex flex-1">{e?.commentNumber}</td>
                                    <td className="flex flex-1">{e?.reviewNumber}</td>
                                    <td className="flex flex-1">{e?.viewNumber}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {showLoadMoreMovieButton ? (
                    <button
                        onClick={() => loadMoreMoviesInAdmin()}
                        className="my-2 ml-4 text-sm font-medium text-[#b8b8b8] hover:text-orange-600"
                    >
                        Tải thêm phim
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default MovieList;
