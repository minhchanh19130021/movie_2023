import { useState } from 'react';
import { Rating } from '~/components/Rating';
import { Review } from '~/components/Review';

function Detail() {
    function dataRowTable(leftColumn, rightColumn) {
        return (
            <tr>
                <td className="py-1 pr-2 capitalize text-[#36b0e7]">{leftColumn}</td>
                {Array.isArray(rightColumn) ? (
                    <td className="pl-2 text-[#b1a4ac]">{rightColumn.map((m) => m.name).join(', ')}</td>
                ) : (
                    <td className="pl-2 text-[#b1a4ac]">{rightColumn?.name ? rightColumn?.name : rightColumn}</td>
                )}
            </tr>
        );
    }
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit({ author, rating, content });
        setAuthor('');
        setRating(0);
        setContent('');
    };
    const reviews = [
        {
            author: 'Minh Chánh',
            rating: 4,
            content: 'Phim rất hay và đáng xem.',
        },
        {
            author: 'Phi Khánh',
            rating: 5,
            content: 'Một trong những bộ phim tuyệt vời nhất mà tôi đã xem.',
        },
        {
            author: 'Mike Johnson',
            rating: 3,
            content: 'Khá ổn, nhưng có một số điểm yếu.',
        },
        {
            author: 'John Doe',
            rating: 4,
            content: 'Phim rất hay và đáng xem.',
        },
        {
            author: 'Jane Smith',
            rating: 5,
            content: 'Một trong những bộ phim tuyệt vời nhất mà tôi đã xem.',
        },
        {
            author: 'Mike Johnson',
            rating: 3,
            content: 'Khá ổn, nhưng có một số điểm yếu.',
        },
        // Add more review objects here...
        {
            author: 'Sarah Anderson',
            rating: 4,
            content: 'Tôi thực sự thích bộ phim này. Cốt truyện hấp dẫn và diễn xuất xuất sắc.',
        },
        {
            author: 'David Lee',
            rating: 2,
            content: 'Tôi không thấy bộ phim này đáng xem. Cốt truyện nhạt nhẽo và diễn viên diễn kém.',
        },
    ];
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        setIsSaved(!isSaved);
    };
    return (
        <div className="max-w-full">
            <div className="mx-auto h-full w-full max-w-[1520px]  p-6 ">
                <div className="mb-4">
                    <ul className="flex flex-wrap">
                        <p className="flex items-center text-sm text-[#5c687c]">
                            Trang Chủ
                            <span>
                                <svg
                                    width="3"
                                    height="6"
                                    aria-hidden="true"
                                    className="mx-3 overflow-visible text-slate-400"
                                >
                                    <path
                                        d="M0 0L3 3L0 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </span>
                            Phim Lẻ
                            <span>
                                <svg
                                    width="3"
                                    height="6"
                                    aria-hidden="true"
                                    className="mx-3 overflow-visible text-slate-400"
                                >
                                    <path
                                        d="M0 0L3 3L0 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </span>
                            Bồ Đào Nha
                            <span>
                                <svg
                                    width="3"
                                    height="6"
                                    aria-hidden="true"
                                    className="mx-3 overflow-visible text-slate-400"
                                >
                                    <path
                                        d="M0 0L3 3L0 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </span>
                            Hành Động
                            <span>
                                <svg
                                    width="3"
                                    height="6"
                                    aria-hidden="true"
                                    className="mx-3 overflow-visible text-slate-400"
                                >
                                    <path
                                        d="M0 0L3 3L0 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </span>
                            Hình Sự
                            <span>
                                <svg
                                    width="3"
                                    height="6"
                                    aria-hidden="true"
                                    className="mx-3 overflow-visible text-slate-400"
                                >
                                    <path
                                        d="M0 0L3 3L0 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </span>
                            Chính kịch
                            <span>
                                <svg
                                    width="3"
                                    height="6"
                                    aria-hidden="true"
                                    className="mx-3 overflow-visible text-slate-400"
                                >
                                    <path
                                        d="M0 0L3 3L0 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </span>
                            Biệt Đội Tinh Nhuệ
                        </p>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <div className="m-0 flex h-full w-full rounded-xl bg-slate-100  p-4 text-white">
                        <div className="m-0 p-0 text-center">
                            <img
                                className="w-[250px] rounded-lg object-cover"
                                src="https://ophim8.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2Finumber-number-vang-johannesburg-thumb.jpg&w=256&q=75"
                                alt=""
                            />
                            <div className="mx-auto flex items-center p-4 justify-between">
                                <button
                                    className="rounded bg-red-500 px-4 py-2 font-bold text-white text-sm"
                                >
                                    Xem phim
                                </button>
                                <button
                                    className={`rounded bg-blue-500 px-4 py-2 font-bold text-sm text-white  ${
                                        isSaved ? '' : 'bg-green-500'
                                    }`}
                                    onClick={handleSave}
                                >
                                    {isSaved ? 'Bỏ lưu' : 'Lưu'}
                                </button>
                            </div>
                        </div>
                        <div className="mx-4 w-full px-4">
                            <p className="my-2 text-center text-lg font-bold uppercase text-purple-600">
                                ÔNG HOÀNG KHÁCH SẠN
                            </p>
                            <p className="text-center font-medium capitalize italic text-blue-500">Hotel King</p>
                            <div>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataRowTable('số tập', 'Hoàn Tất (32/32)')}
                                        {dataRowTable('thời lượng', '32 Tập')}
                                        {dataRowTable('năm phát hành', '60 phút')}
                                        {dataRowTable('chất lượng', '2014')}
                                        {dataRowTable('ngôn ngữ', 'HD')}
                                        {dataRowTable('đạo diễn', 'Vietsub')}
                                        {dataRowTable(
                                            'diễn viên',
                                            'Lee Dong Wook, Lee Da Hae, Im Seul Ong, Wang Ji Hye, Kim Hae Sook, Lee Deok Hwa, Jin Tae Hyun',
                                        )}
                                        {dataRowTable('thể loại', 'Tâm Lý')}
                                        {dataRowTable('quốc gia', 'Hàn Quốc')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 rounded-x m-0 my-4 h-full w-full p-4 text-slate-800">
                        <p className="my-4 cursor-pointer rounded-lg bg-blue-300 px-4 py-2 capitalize text-blue-600 hover:bg-blue-200 ">
                            Nội dung phim
                        </p>
                        <p className="px-4 pb-2 pt-4 text-sm text-slate-700">
                            Bộ ba khách du lịch trong chuyến đi câu cá ở đầm lầy ngập mặn ở Bắc Úc phải tự lo liệu khi
                            hướng dẫn viên du lịch của họ bị cá sấu giết chết.
                        </p>
                        <p className="my-4 cursor-pointer rounded-lg bg-blue-300 px-4 py-2 capitalize text-blue-600 hover:bg-blue-200 ">
                            Xem phim
                        </p>
                        <div className="flex flex-wrap">
                            <button className="m-2 block h-[28px] w-[68px] rounded border-0 bg-gray-300  text-sm transition-all hover:bg-indigo-300 hover:text-white">
                                Tập 1
                            </button>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <h2 className="mb-4 text-lg font-semibold">Nhập đánh giá phim</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tác giả:</label>
                        <input
                            type="text"
                            className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Đánh giá:</label>
                        <Rating
                            rating={rating}
                            totalStars={5}
                            onRatingChange={(selectedRating) => setRating(selectedRating)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nội dung:</label>
                        <textarea
                            className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
                    >
                        Gửi
                    </button>
                </form>

                <div className="mt-2">
                    {/* <h2 className="mb-4 text-lg font-semibold">Đánh giá phim</h2> */}
                    {reviews.map((review, index) => (
                        <Review key={index} {...review} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Detail;
