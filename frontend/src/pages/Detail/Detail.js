function Detail() {
    function dataRowTable(leftColumn, rightColumn) {
        return (
            <tr style={{ borderTop: '1px solid #364254' }}>
                <td className="py-1 pr-2 capitalize text-[#36b0e7]">{leftColumn}</td>
                {Array.isArray(rightColumn) ? (
                    <td className="pl-2 text-[#b1a4ac]">{rightColumn.map((m) => m.name).join(', ')}</td>
                ) : (
                    <td className="pl-2 text-[#b1a4ac]">{rightColumn?.name ? rightColumn?.name : rightColumn}</td>
                )}
            </tr>
        );
    }
    return (
        <div className="h-full w-full bg-gray-900 p-6 ">
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
                <div className="m-0 flex flex h-full w-full rounded-xl bg-gray-800 p-0 p-4 text-white">
                    <div className="m-0 p-0 text-center">
                        <img
                            className="w-[250px] rounded-lg rounded-lg
                            "
                            src="https://ophim6.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2Fbiet-doi-tinh-nhue-thumb.jpg&w=256&q=75"
                        />
                    </div>
                    <div className="mx-4 w-full px-4">
                        <p className="my-2 text-center text-lg uppercase text-purple-600">ÔNG HOÀNG KHÁCH SẠN</p>
                        <p className="text-center capitalize italic text-blue-500">Hotel King</p>
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
                <div
                    className="w-100 m-0 my-4 h-full w-full rounded-xl bg-gray-800 p-0
 p-4 text-white"
                >
                    <p className="my-4 rounded-lg bg-[#0c4a6e] px-4 py-2 capitalize text-[#34b3ec]">Nội dung phim</p>
                    <p className="px-4 pb-2 pt-4 text-sm text-gray-200">
                        Bộ ba khách du lịch trong chuyến đi câu cá ở đầm lầy ngập mặn ở Bắc Úc phải tự lo liệu khi hướng
                        dẫn viên du lịch của họ bị cá sấu giết chết.
                    </p>
                    <p className="my-4 rounded-lg bg-[#0c4a6e] px-4 py-2 capitalize text-[#34b3ec]">Xem Phim</p>
                    <div className="flex flex-wrap">
                        <button className="m-2 block h-[28px] w-[68px] rounded border-0 bg-[#475569] text-sm hover:bg-indigo-700">
                            Tập 1
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Detail;
