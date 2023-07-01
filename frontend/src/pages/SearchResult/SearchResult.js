import { SearchHintItem } from '~/pages/Search/SearchHintItem';
import SearchResultItem from './SearchResultItem';
import { useState } from 'react';

function SearchResult() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="max-w-full">
            <div className="padding-responsive padding-responsive mx-auto max-w-[1200px] ">
                <div className="relative mb-14 mt-4 flex justify-between rounded-lg bg-[#151515] px-4 py-3">
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
                    <button
                        className={
                            searchValue.length > 0
                                ? `h-12 w-[120px] rounded-lg bg-orange-600 text-sm font-medium text-white transition-colors hover:bg-orange-500`
                                : `h-12 w-[120px] rounded-lg bg-[#2c2c2e] text-sm font-medium text-[#767676] transition-colors`
                        }
                    >
                        Tìm kiếm
                    </button>
                    {searchValue.length > 0 ? (
                        <div className="absolute left-0 top-20 w-full rounded-lg bg-[#202020] ">
                            <SearchHintItem />
                            <SearchHintItem />

                            <SearchHintItem />
                            <SearchHintItem />
                            <SearchHintItem />
                            <SearchHintItem />
                            <SearchHintItem />
                        </div>
                    ) : null}
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                    <SearchResultItem />
                </div>
                <button className="mx-auto flex rounded-lg bg-orange-600 px-6 py-2 font-medium capitalize transition-colors hover:bg-orange-500">
                    Xem Thêm
                </button>
            </div>
        </div>
    );
}

export default SearchResult;
