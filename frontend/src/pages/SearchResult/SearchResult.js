import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SearchHintItem } from '~/pages/Search/SearchHintItem';
import * as searchService from '~/services/searchService';
import SearchResultItem from './SearchResultItem';
import Search from '../Search/Search';

function SearchResult() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const { tuKhoa, trang } = useParams();
    const keywordFromUrl = tuKhoa.split('=')[1];
    const pageValue = trang.split('=')[1];

    const [totalProduct, setTotalProduct] = useState(1);
    const pageSize = 1;
    const [numberPage, setNumberPage] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await searchService.getMovieByKeyword(
                keywordFromUrl,
                pageValue,
                pageSize,
                'release_date',
                'asc',
            );
            setSearchResult(res?.content);
            setTotalProduct(res?.totalElements);
            const totalPages = Math.ceil(res?.totalElements / pageSize);
            setNumberPage(Array.from({ length: totalPages }, (_, index) => index + 1));
        };
        fetchApi();
    }, [keywordFromUrl, pageValue, pageSize]);

    const prevPage = () => {
        const currentPage = parseInt(pageValue) - 1;
        navigate(`/tim-kiem/tu-khoa=${keywordFromUrl}/trang=${currentPage}`);
    };

    const nextPage = () => {
        const currentPage = parseInt(pageValue) + 1;
        navigate(`/tim-kiem/tu-khoa=${keywordFromUrl}/trang=${currentPage}`);
    };

    return (
        <div className="max-w-full">
            <div className="padding-responsive padding-responsive mx-auto max-w-[1200px] ">
                <Search/>
                {searchResult?.length > 0 ? (
                    <>
                        <div className="grid grid-cols-5 gap-4">
                            {searchResult?.map((e) => {
                                return <SearchResultItem key={e?.id} to="" img="" name={e?.name} />;
                            })}
                        </div>
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
                            {numberPage.map((pageNumber) => {
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
                                            navigate(`/tim-kiem/tu-khoa=${keywordFromUrl}/trang=${pageNumber}`);
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
                        <h3>
                            Không tìm thấy kết quả cho từ khóa <strong className='text-orange-500'>{keywordFromUrl}</strong>
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchResult;
