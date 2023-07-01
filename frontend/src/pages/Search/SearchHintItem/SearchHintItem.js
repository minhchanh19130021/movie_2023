import { NavLink } from 'react-router-dom';

function SearchHintItem() {
    return (
        <NavLink
            to=""
            className="flex items-center border-b border-[#303030] px-4 py-3 first:rounded-t-lg last:rounded-b-lg hover:bg-[#2c2c2e]"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-5 h-6 w-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
            <p>Từ khóa tìm kiếm ở đây</p>
        </NavLink>
    );
}

export default SearchHintItem;
