function ModalResultSearch() {
    return (
        <div className="result flex items-center rounded-xl px-2 py-2 transition-all hover:cursor-pointer hover:bg-gray-400 hover:text-white">
            <img
                src="https://ophim8.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2Fchim-lua-tho-nhi-ky-thumb.jpg&w=192&q=75"
                alt="result-search"
                className="h-[53px] w-[42px] rounded-lg"
            />
            <div className="ml-2">
                <p className="">Tên phim</p>
                <p className="">Nhà sản xuất</p>
            </div>
        </div>
    );
}

export default ModalResultSearch;
