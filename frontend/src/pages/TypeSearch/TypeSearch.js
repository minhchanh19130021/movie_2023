import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import * as typesService from '~/services/typeService';
import MovieComponent from '~/components/MovieComponent/MovieComponent';

function TypeSearch() {
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const { theLoai, trang } = useParams();
    const keywordFromUrl = theLoai.split('=')[1];
    const pageValue = trang.split('=')[1];

    // const [totalProduct, setTotalProduct] = useState(1);
    const pageSize = 2;
    const [numberPage, setNumberPage] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await typesService.getMoviesByType(keywordFromUrl, pageValue, pageSize, 'inserted_date', 'asc');
            setSearchResult(res?.content);
            console.log(res?.content);
            // setTotalProduct(res?.totalElements);
            const totalPages = Math.ceil(res?.totalElements / pageSize);
            setNumberPage(Array.from({ length: totalPages }, (_, index) => index + 1));
        };
        fetchApi();
    }, [keywordFromUrl, pageValue, pageSize]);

    const prevPage = () => {
        const currentPage = parseInt(pageValue) - 1;
        navigate(`/the-loai=${keywordFromUrl}/trang=${currentPage}`);
    };

    const nextPage = () => {
        const currentPage = parseInt(pageValue) + 1;
        navigate(`/the-loai=${keywordFromUrl}/trang=${currentPage}`);
    };

    return (
        <div className="max-w-full">
            <div className="padding-responsive padding-responsive mx-auto max-w-[1200px] ">
                {searchResult?.length > 0 ? (
                    <>
 <div className="relative flex flex-row flex-wrap  ">
                        {searchResult?.map((movie) => (
                    <MovieComponent movie={movie} key={movie.id} className=" "/>
                   
                ))}</div>


                        {/* <div className="grid grid-cols-5 gap-4">
                            {searchResult?.map((e) => {
                                return (
                                    <NavLink key={e?.id} to={'/'} className="mb-12 rounded-lg !text-white">
                                        <img src={e?.poster} alt="result-search-img" className="mb-2 rounded-lg" />
                                        {e?.name}
                                    </NavLink>
                                );
                            })}
                        </div> */}
                        <div className="flex items-center justify-center">
                            {searchResult?.length > 0 && parseInt(pageValue) > 1 && (
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
                                            navigate(`/the-loai=${keywordFromUrl}/trang=${pageNumber}`);
                                        }}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}
                            {searchResult?.length > 0 && parseInt(pageValue) < numberPage.length && (
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
                ) : (
                    <div>
                        {/* <h3>
                            Không tìm thấy kết quả cho từ khóa <strong className='text-orange-500'>{keywordFromUrl}</strong>
                        </h3> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TypeSearch;
