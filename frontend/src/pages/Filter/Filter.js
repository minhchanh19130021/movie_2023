import { NavLink } from 'react-router-dom';

function Filter() {
    return (
       <>
            <div className="max-w-full">
                <div className="mx-auto grid max-w-[1200px] grid-cols-5 gap-4">
                    <div>
                        <div className="border-b-2 border-white py-4">
                            <h3>Lọc theo quốc gia</h3>
                            <div className="">
                                <div className="flex flex-col">
                                    <NavLink
                                        to="/loc/quoc-gia='minh'"
                                        className="my-2 transition-colors hover:font-bold hover:text-orange-600"
                                    >
                                        Việt Nam
                                    </NavLink>
                                    <NavLink
                                        to="/loc/quoc-gia='minh'"
                                        className="my-2 transition-colors hover:font-bold hover:text-orange-600"
                                    >
                                        Hàn Quốc
                                    </NavLink>
                                    <NavLink
                                        to="/loc/quoc-gia='minh'"
                                        className="my-2 transition-colors hover:font-bold hover:text-orange-600"
                                    >
                                        Nhật Bản
                                    </NavLink>
                                    <NavLink
                                        to="/loc/quoc-gia='minh'"
                                        className="my-2 transition-colors hover:font-bold hover:text-orange-600"
                                    >
                                        Mỹ
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='py-4'>
                            <h3>Lọc theo đạo diễn</h3>
                            <div className="">
                                <div className="flex flex-col">
                                    <NavLink
                                        to="/loc/quoc-gia='minh'"
                                        className="my-2 transition-colors hover:font-bold hover:text-orange-600"
                                    >
                                        Việt Nam
                                    </NavLink>
                                    <NavLink
                                        to="/loc/quoc-gia='minh'"
                                        className="my-2 transition-colors hover:font-bold hover:text-orange-600"
                                    >
                                        Hàn Quốc
                                    </NavLink>
                                    <NavLink
                                        to="/loc/quoc-gia='minh'"
                                        className="my-2 transition-colors hover:font-bold hover:text-orange-600"
                                    >
                                        Nhật Bản
                                    </NavLink>
                                    <NavLink
                                        to="/loc/quoc-gia='minh'"
                                        className="my-2 transition-colors hover:font-bold hover:text-orange-600"
                                    >
                                        Mỹ
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="grid grid-cols-3">
                            <NavLink to={'/'} className="mb-12 rounded-lg !text-white">
                                <img
                                    src="ấ"
                                    alt="result-search-img"
                                    className="mb-2 rounded-lg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                            'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                                    }}
                                />
                                Tên phim
                            </NavLink>
                            <NavLink to={'/'} className="mb-12 rounded-lg !text-white">
                                <img
                                    src="ấ"
                                    alt="result-search-img"
                                    className="mb-2 rounded-lg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                            'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                                    }}
                                />
                                Tên phim
                            </NavLink>
                            <NavLink to={'/'} className="mb-12 rounded-lg !text-white">
                                <img
                                    src="ấ"
                                    alt="result-search-img"
                                    className="mb-2 rounded-lg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                            'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                                    }}
                                />
                                Tên phim
                            </NavLink>
                            <NavLink to={'/'} className="mb-12 rounded-lg !text-white">
                                <img
                                    src="ấ"
                                    alt="result-search-img"
                                    className="mb-2 rounded-lg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                            'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                                    }}
                                />
                                Tên phim
                            </NavLink>

                            <NavLink to={'/'} className="mb-12 rounded-lg !text-white">
                                <img
                                    src="ấ"
                                    alt="result-search-img"
                                    className="mb-2 rounded-lg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                            'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                                    }}
                                />
                                Tên phim
                            </NavLink>

                            <NavLink to={'/'} className="mb-12 rounded-lg !text-white">
                                <img
                                    src="ấ"
                                    alt="result-search-img"
                                    className="mb-2 rounded-lg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                            'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                                    }}
                                />
                                Tên phim
                            </NavLink>

                            <NavLink to={'/'} className="mb-12 rounded-lg !text-white">
                                <img
                                    src="ấ"
                                    alt="result-search-img"
                                    className="mb-2 rounded-lg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                            'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                                    }}
                                />
                                Tên phim
                            </NavLink>

                            <NavLink to={'/'} className="mb-12 rounded-lg !text-white">
                                <img
                                    src="ấ"
                                    alt="result-search-img"
                                    className="mb-2 rounded-lg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                            'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                                    }}
                                />
                                Tên phim
                            </NavLink>

                            <NavLink to={'/'} className="mb-12 rounded-lg !text-white">
                                <img
                                    src="ấ"
                                    alt="result-search-img"
                                    className="mb-2 rounded-lg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                            'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                                    }}
                                />
                                Tên phim
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
       </>
    );
}

export default Filter;
