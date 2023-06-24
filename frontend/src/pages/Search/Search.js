import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Search() {
    const data = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Item ${index + 1} with a longer name that takes up more space `,
        year: 2021 + index,
        status: index % 2 === 0 ? 'Active' : 'Inactive',
        format: index % 3 === 0 ? 'PDF' : 'DOCX',
        country: index % 4 === 0 ? 'Việt Nam' : 'Mỹ',
        updateDate: `2023-06-${index + 1}`,
    }));

    const itemsPerPage = 10; // Số mục hiển thị trên mỗi trang
    const totalPages = Math.ceil(data.length / itemsPerPage); // Tổng số trang
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại

    // Tính chỉ mục của mục đầu tiên và mục cuối cùng trên trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = data.slice(startIndex, endIndex);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    // danh sách nút chuyển trang
    const pageButtons = [];
    const maxButtons = 5;
    let startPage = currentPage - Math.floor(maxButtons / 2);
    let endPage = startPage + maxButtons - 1;

    // không có ít hơn 5 nút nhấn
    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(totalPages, startPage + maxButtons - 1);
    } else if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
            <button
                key={i}
                onClick={() => goToPage(i)}
                className={`mr-2  bg-gray-200 px-3 py-1 text-sm font-medium text-gray-500 ${
                    i === currentPage ? 'text-bold border-2 border-blue-400 bg-blue-300 text-blue-500' : ''
                }`}
            >
                {i}
            </button>,
        );
    }

    const [filters, setFilters] = useState({
        genre: '',
        year: '',
        country: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleFilterSubmit = () => {
        // Xử lý logic lọc phim với các filters
        // ...
    };
    const genres = Array.from(new Set(data.map((movie) => movie.id)));
    const years = Array.from(new Set(data.map((movie) => movie.year)));
    const countries = Array.from(new Set(data.map((movie) => movie.country)));
    const status = Array.from(new Set(data.map((movie) => movie.status)));

    return (
        <div className="max-w-full">
            <div className="mx-auto max-w-[1520px]">
                <div className="flex items-center my-4">
                    <select
                        name="genre"
                        value={filters.genre}
                        onChange={handleFilterChange}
                        className="mr-2 rounded-md border border-gray-300 px-4 py-2"
                    >
                        <option value="">Chọn thể loại</option>
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>

                    <select
                        name="year"
                        value={filters.year}
                        onChange={handleFilterChange}
                        className="mr-2 rounded-md border border-gray-300 px-4 py-2"
                    >
                        <option value="">Chọn năm</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>

                    <select
                        name="country"
                        value={filters.country}
                        onChange={handleFilterChange}
                        className="mr-2 rounded-md border border-gray-300 px-4 py-2"
                    >
                        <option value="">Chọn quốc gia</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>

                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleFilterChange}
                        className="mr-2 rounded-md border border-gray-300 px-4 py-2"
                    >
                        <option value="">Chọn trạng thái</option>
                        {status.map((status,i) => (
                            <option key={i} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>

                    <button onClick={handleFilterSubmit} className="rounded-md bg-blue-500 px-4 py-2 text-white">
                        Lọc phim
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200 rounded-full">
                    <thead className=" bg-slate-200">
                        <tr>
                            <th className="w-1/3 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                TÊN
                            </th>
                            <th className="w-1/6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                NĂM
                            </th>
                            <th className="w-1/6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                TÌNH TRẠNG
                            </th>
                            <th className="w-1/6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                ĐỊNH DẠNG
                            </th>
                            <th className="w-1/6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                QUỐC GIA
                            </th>
                            <th className="w-1/6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                NGÀY CẬP NHẬT
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className="flex items-center whitespace-nowrap px-6 py-4">
                                    <NavLink to="">
                                        <div className="flex items-center">
                                            <img
                                                src="https://ophim8.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2Fchim-lua-tho-nhi-ky-thumb.jpg&w=192&q=75"
                                                alt=""
                                                className="h-[63px] w-[48px] rounded-md object-cover"
                                            />
                                            <div className="ml-2 flex flex-col justify-between">
                                                <div className="flex justify-between">
                                                    <p className="font-bold text-blue-400">{item.name}</p>
                                                    <p className="font-bold text-red-500">[Vietsub độc quyền]</p>
                                                </div>
                                                <p className="block text-slate-300">Nhà sản xuất: Tuzak</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">{item.year}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.status}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.format}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.country}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.updateDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                        Hiển thị {startIndex + 1} - {Math.min(endIndex, data.length)} trên tổng số {data.length} mục
                    </div>
                    <div className="flex">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="mr-2 rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-500 disabled:cursor-not-allowed"
                        >
                            Trang trước
                        </button>
                        {pageButtons}
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-500 disabled:cursor-not-allowed"
                        >
                            Trang tiếp theo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
