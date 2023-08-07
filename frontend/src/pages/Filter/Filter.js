import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import * as filterMovie from '~/services/searchService';

function Filter() {
    const [countries, setCountries] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [movies, setMovies] = useState([]);
    const { trang } = useParams();
    const navigate = useNavigate();

    const pageValue = trang.split('=')[1];

    const [totalProduct, setTotalProduct] = useState(1);
    const pageSize = 1;
    const [numberPage, setNumberPage] = useState([]);

    useEffect(() => {
        const fetching = async () => {
            const res = await filterMovie.execute(countries, directors, pageValue, pageSize);
            console.log(directors);
            setMovies(res?.content);
            setTotalProduct(res?.totalElements);
            const totalPages = Math.ceil(res?.totalElements / pageSize);
            setNumberPage(Array.from({ length: totalPages }, (_, index) => index + 1));
        };
        fetching();
    }, [countries, directors, pageValue, pageSize]);

    const prevPage = () => {
        const currentPage = parseInt(pageValue) - 1;
        navigate(`/loc/trang=${currentPage}`);
    };

    const nextPage = () => {
        const currentPage = parseInt(pageValue) + 1;
        navigate(`/loc/trang=${currentPage}`);
    };

    const handleAddCountry = (country) => {
        setCountries([...countries, country]);
    };

    const handleRemoveCountry = (country) => {
        setCountries(countries.filter((c) => c !== country));
    };

    const handleAddDirector = (director) => {
        setDirectors([...directors, director]);
    };

    const handleRemoveDirector = (director) => {
        setDirectors(directors.filter((d) => d !== director));
    };
    return (
        <>
            <div className="max-w-full">
                <div className="mx-auto grid max-w-[1200px] grid-cols-5 gap-4">
                    <div>
                        <div>
                            <div className="  border-b-2 border-white pb-2">
                                Đang lọc theo quốc gia:{' '}
                                {countries.length === 0 && directors.length === 0 ? (
                                    <span>Tất cả</span>
                                ) : (
                                    
                                        countries?.map((e) => {
                                            return (
                                                <div className="" key={e?.id}>
                                                    <div className="flex flex-col items-center">
                                                        <span className="mb-1 block w-full border border-orange-500 px-2 py-1">
                                                            {e}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                )}
                            </div>
                            <div className="  border-b-2 border-white py-2">
                                Đang lọc theo đạo diễn:{' '}
                                {countries.length === 0 && directors.length === 0 ? (
                                    <span>Tất cả</span>
                                ) : (
                                        directors?.map((e) => {
                                            return (
                                                <div className="">
                                                    <div className="flex flex-col items-center">
                                                        <span className="mb-1 block w-full border border-orange-500 px-2 py-1">
                                                            {e}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                )}
                            </div>
                        </div>
                        <div className="border-b-2 border-white py-4">
                            <h3 className='hover:underline cursor-pointer'>Lọc theo quốc gia</h3>
                            <div className="">
                                <div className="flex flex-col">
                                    <p
                                        className="my-2 cursor-pointer transition-colors hover:font-bold hover:text-orange-600"
                                        onClick={() => {
                                            if (countries.includes('Việt Nam')) {
                                                handleRemoveCountry('Việt Nam');
                                            } else {
                                                handleAddCountry('Việt Nam');
                                            }
                                        }}
                                    >
                                        Việt Nam
                                    </p>
                                    <p
                                        className="my-2 cursor-pointer transition-colors hover:font-bold hover:text-orange-600"
                                        onClick={() => {
                                            if (countries.includes('Hàn Quốc')) {
                                                handleRemoveCountry('Hàn Quốc');
                                            } else {
                                                handleAddCountry('Hàn Quốc');
                                            }
                                        }}
                                    >
                                        Hàn Quốc
                                    </p>
                                    <p
                                        className="my-2 cursor-pointer transition-colors hover:font-bold hover:text-orange-600"
                                        onClick={() => {
                                            if (countries.includes('Nhật Bản')) {
                                                handleRemoveCountry('Nhật Bản');
                                            } else {
                                                handleAddCountry('Nhật Bản');
                                            }
                                        }}
                                    >
                                        Nhật Bản
                                    </p>
                                    <p
                                        className="my-2 cursor-pointer transition-colors hover:font-bold hover:text-orange-600"
                                        onClick={() => {
                                            if (countries.includes('Âu Mỹ')) {
                                                handleRemoveCountry('Âu Mỹ');
                                            } else {
                                                handleAddCountry('Âu Mỹ');
                                            }
                                        }}
                                    >
                                        Âu Mỹ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-4">
                            <h3>Lọc theo đạo diễn</h3>
                            <div className="">
                                <div className="flex flex-col">
                                    <p
                                        className="my-2 cursor-pointer transition-colors hover:font-bold hover:text-orange-600"
                                        onClick={() => {
                                            if (directors.includes('Trấn Thành')) {
                                                handleRemoveDirector('Trấn Thành');
                                            } else {
                                                handleAddDirector('Trấn Thành');
                                            }
                                        }}
                                    >
                                        Trấn Thành
                                    </p>
                                    <p
                                        className="my-2 cursor-pointer transition-colors hover:font-bold hover:text-orange-600"
                                        onClick={() => {
                                            if (directors.includes('Victor Vũ')) {
                                                handleRemoveDirector('Victor Vũ');
                                            } else {
                                                handleAddDirector('Victor Vũ');
                                            }
                                        }}
                                    >
                                        Victor Vũ
                                    </p>
                                    <p
                                        className="my-2 cursor-pointer transition-colors hover:font-bold hover:text-orange-600"
                                        onClick={() => {
                                            if (directors.includes('Bradley Cooper')) {
                                                handleRemoveDirector('Bradley Cooper');
                                            } else {
                                                handleAddDirector('Bradley Cooper');
                                            }
                                        }}
                                    >
                                        Bradley Cooper
                                    </p>
                                    <p
                                        className="my-2 cursor-pointer transition-colors hover:font-bold hover:text-orange-600"
                                        onClick={() => {
                                            if (directors.includes('Shinkai Makoto')) {
                                                handleRemoveDirector('Shinkai Makoto');
                                            } else {
                                                handleAddDirector('Shinkai Makoto');
                                            }
                                        }}
                                    >
                                        Shinkai Makoto
                                    </p>
                                    <p
                                        className="my-2 cursor-pointer transition-colors hover:font-bold hover:text-orange-600"
                                        onClick={() => {
                                            if (directors.includes('Bryan Singer')) {
                                                handleRemoveDirector('Bryan Singer');
                                            } else {
                                                handleAddDirector('Bryan Singer');
                                            }
                                        }}
                                    >
                                        Bryan Singer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="">
                            {movies?.length === 0 ? (
                                <p className="font-bold text-orange-500">Không tìm thấy video phù hợp</p>
                            ) : (
                                <>
                                    <div className="grid grid-cols-3 gap-4">
                                        {movies?.map((e) => {
                                            return (
                                                <NavLink key={e?.id} to={'/'} className="mb-12 rounded-lg !text-white">
                                                    <img
                                                        src={e?.poster}
                                                        alt="result-search-img"
                                                        className="mb-2 rounded-lg"
                                                    />
                                                    {e?.name}
                                                </NavLink>
                                            );
                                        })}
                                    </div>
                                    <div className="flex items-center justify-center">
                                        {movies?.length > 0 && parseInt(pageValue) > 1 && (
                                            <button
                                                onClick={prevPage}
                                                className="mx-1 flex  h-8 w-8 items-center justify-center rounded-sm bg-[#eeeeee] text-sm text-[#bbb9b9] transition-colors disabled:cursor-not-allowed"
                                            >
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
                                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                                    />
                                                </svg>
                                            </button>
                                        )}
                                        {numberPage?.map((pageNumber) => {
                                            const isCurrentPage = parseInt(pageValue) === pageNumber;
                                            return (
                                                <button
                                                    key={pageNumber}
                                                    id={pageNumber}
                                                    className={`mx-1 h-8 w-8 rounded-sm ${
                                                        isCurrentPage
                                                            ? 'bg-orange-600 text-[#fff]'
                                                            : 'transition-all hover:bg-[#dbdbdb] hover:text-black'
                                                    }`}
                                                    onClick={() => {
                                                        navigate(`/loc/trang=${pageNumber}`);
                                                    }}
                                                >
                                                    {pageNumber}
                                                </button>
                                            );
                                        })}
                                        {movies?.length > 0 && parseInt(pageValue) < numberPage.length && (
                                            <button
                                                onClick={nextPage}
                                                className="mx-1 flex  h-8 w-8 items-center justify-center rounded-sm bg-[#eeeeee] text-sm text-[#bbb9b9] transition-colors disabled:cursor-not-allowed "
                                            >
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
                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                    />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;
