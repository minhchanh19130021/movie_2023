import Review from './Review/Review';
import Comment from './Comment/Comment';
import { increaseNumberOfViewsInMovie } from '~/services/movieService';

function View() {
    function increaseViewNumber() {
        // don't need to receive response, it will be make performance better
        // (in case of increaseNumberOfViewsInMovie in concurrency)
        increaseNumberOfViewsInMovie(1);
    }

    const renderElements = () => {
        const elements = [];

        for (let i = 1; i < 100; i++) {
            elements.push(
                <div
                    key={i}
                    className="rounded-lg bg-[#0f0f0f] py-2 font-medium text-[#616161] transition-colors hover:cursor-pointer hover:bg-[#202020] hover:text-white"
                >
                    <p className="text-center" onClick={() => increaseViewNumber()}>
                        Tập {i}
                    </p>
                </div>,
            );
        }

        return elements;
    };
    return (
        <div className="max-w-full">
            <div className="padding-responsive  mx-auto max-w-[1200px]">
                <div className="mb-12 mt-4 h-[740px] w-full rounded-lg bg-white"></div>
                <div className="mb-8">
                    <h3 className="mb-8 text-2xl font-medium">Danh sách</h3>
                    <div className="grid grid-cols-10 gap-3">{renderElements()}</div>
                </div>
                <div className="mb-12 grid grid-cols-3 gap-x-5 text-[#d2d2d2]">
                    <div className="col-span-2">
                        <div className="font-medium">
                            <p className="mb-4 text-2xl text-white">Bạn Trai Tôi Là Hồ Ly</p>
                            <p className="mb-3 text-base">Tale of the Nine-tailed</p>
                        </div>
                        <div className="mb-3 flex items-center text-sm">
                            <p>2020</p>
                            <div className="mx-2 h-1 w-1 rounded-full bg-gray-50 opacity-80"></div>
                            <p>16+</p>
                            <div className="mx-2 h-1 w-1 rounded-full bg-gray-50 opacity-80"></div>
                            <p>100/100 tập</p>
                            <div className="mx-2 h-1 w-1 rounded-full bg-gray-50 opacity-80"></div>
                            <p className="capitalize">Hàn quốc</p>
                            <div className="mx-2 h-1 w-1 rounded-full bg-gray-50 opacity-80"></div>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm">Thể loại: tên thể loại</p>
                        </div>
                        <div>
                            <p className="text-sm">
                                Lee Yeon là hồ ly mang nhiệm vụ như một người giám sát, có quyền trừng trị những kẻ hại
                                cuộc sống của loài người. Trong khi đó, người em cùng cha khác mẹ của anh là Lee Rang,
                                mang hai dòng máu nửa người nửa yêu, thì chuyên đi gây họa. Cuộc sống vốn dĩ sẽ bình
                                yên, nếu Lee Yeon không phải lòng Nam Ji Ah - người thực hiện những chương trình tìm
                                hiểu về thế lực siêu nhiên. Bạn, trai, tôi, là, hồ, ly, The, Tale, of, a, Gumiho, Tale,
                                of, the, Nine-Tailed, Bạn trai tôi là hồ ly, phim Bạn trai tôi là hồ ly, xem phim Bạn
                                trai tôi là hồ ly tập 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16, Bạn trai tôi là hồ ly
                                vietsub, tình cảm, Tale of the Nine-Tailed, Bạn trai tôi là hồ ly online, xem Tale of
                                the Nine-Tailed, Bạn trai tôi là hồ ly FPT Play, phim Tale of the Nine-Tailed, Tale of
                                the Nine-Tailed phụ đề, xem phim Tale of the Nine-Tailed tập 1 2 3 4 5 6 7 8 9 10 11 12
                                13 14 15 16, Tale of the Nine-Tailed fptplay, FPT, The Tale of a Gumiho, xem The Tale of
                                a Gumiho, phim The Tale of a Gumiho, The Tale of a Gumiho phụ đề, xem phim The Tale of a
                                Gumiho tập 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16, The Tale of a Gumiho fptplay, tail,
                                tails
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <div className="mb-4 flex items-center">
                                <div className="mr-8 flex items-center hover:cursor-pointer">
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
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>

                                    <p className="ml-2 text-sm">Theo dõi</p>
                                </div>
                                <div className="flex items-center hover:cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p className="ml-2 text-sm">Chia sẻ</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 py-1 text-sm text-[#d2d2d2]">
                                <p>Diễn viên:</p>
                                <p className="col-span-2 ">Lee Dong Wook , Jo Bo Ah , Kim Bum , Ahn Gil Kang</p>
                            </div>
                            <div className="grid grid-cols-3 py-1 text-sm text-[#d2d2d2]">
                                <p>Đạo diễn:</p>
                                <p className="col-span-2 ">Kang Shin Hyo</p>
                            </div>
                            <div className="grid grid-cols-3 py-1 text-sm text-[#d2d2d2]">
                                <p>Thể loại:</p>
                                <p className="col-span-2 ">Tâm lý , Lãng mạn , Hành động , Kỳ ảo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Review></Review>
                </div>
                <div className="mt-5">
                    <Comment />
                </div>
            </div>
        </div>
    );
}

export default View;
