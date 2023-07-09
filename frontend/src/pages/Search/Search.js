import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useDebounce from '~/hooks/useDebounce';
import * as searchService from '~/services/searchService';
import SearchHintItem from './SearchHintItem/SearchHintItem';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const debouncedSearchTerm = useDebounce(searchValue, 1000);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await searchService.getMovieByKeyword(searchValue.trim(), 1, 5, 'release_date', 'asc');
            setSearchResult(res?.content);
        };
        if(searchValue.length>0){
            fetchApi();
        }
    }, [debouncedSearchTerm]);

    return (
        <div className="max-w-full">
            <div className="padding-responsive mx-auto max-w-[1200px] ">
                <form
                    className="relative mb-14 mt-4 flex justify-between rounded-lg bg-[#151515] px-4 py-3"
                    onSubmit={() => {
                        setSearchResult([]);
                    }}
                >
                    <div className="flex w-full items-center">
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
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                        <input
                            placeholder="Nhập tên phim, kênh, sự kiện..."
                            className="w block w-full border-none bg-transparent px-4 py-3 text-sm leading-4 text-white outline-none"
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                    </div>
                    <NavLink to={`/tim-kiem/tu-khoa=${searchValue}/trang=1`}>
                        <button
                            type="submit"
                            onClick={() => {
                                setSearchResult([]);
                                setSearchValue('');
                            }}
                            className={
                                searchValue?.length > 0
                                    ? `h-12 w-[120px] rounded-lg bg-orange-600 text-sm font-medium text-white transition-colors hover:bg-orange-500`
                                    : `h-12 w-[120px] rounded-lg bg-[#2c2c2e] text-sm font-medium text-[#767676] transition-colors`
                            }
                        >
                            Tìm kiếm
                        </button>
                    </NavLink>
                    <div className="absolute left-0 top-20 w-full rounded-lg bg-[#202020] ">
                        {searchResult?.map((e) => {
                            return (
                                <SearchHintItem
                                    key={e?.id}
                                    to={`/tim-kiem/tu-khoa=${e?.name}/trang=1`}
                                    name={e?.name}
                                    onClick={() => {
                                        setSearchResult([]);
                                    }}
                                />
                            );
                        })}
                    </div>
                </form>

                {/* <div className="">
                    <RecentlyTrend />
                </div> */}
            </div>
        </div>
    );
}

export default Search;
