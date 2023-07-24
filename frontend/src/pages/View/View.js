import Review from './Review/Review';
import Comment from './Comment/Comment';
import { getMovieBySlug, increaseNumberOfViewsInMovie } from '~/services/movieService';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkUserIdInOrder } from '~/services/orderServices';
import { useSelector } from 'react-redux';

function View() {
    const params = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const [slugMovie, setSlugMovie] = useState();
    const [movieId, setMovieId] = useState();
    const navigate = useNavigate();
    const user = useSelector((state) => state?.authentication?.login?.currentUser);

    useEffect(() => {
        const currentSlugMovie = params.slug;
        setSlugMovie(slugMovie);
        const load = getMovieBySlug(currentSlugMovie);
        load.then(
            (e) => {
                if (e?.status === 200) {
                    setMovieInfo(e?.data);
                    if (e?.data?.movieId) {
                        setMovieId(e?.data?.movieId);
                    }
                } else {
                    navigate('/server-error');
                }
            },
            (e) => {
                navigate('/not-found');
                console.log(e);
            },
        );
    }, []);

    function increaseViewNumber() {
        // don't need to receive response, it will be make performance better
        // (in case of increaseNumberOfViewsInMovie in concurrency)
        increaseNumberOfViewsInMovie(1);
    }

    function openVideo(link) {
        window.open(link, '_blank');
    }

    return (
        <div className="max-w-full">
            <div className="padding-responsive mx-auto max-w-[1200px]">
                <div className="mb-12 mt-4 h-[740px] w-full rounded-lg bg-white">
                    <img className="w-100 h-100" src={movieInfo?.movie?.poster}></img>
                </div>
                <div className="mb-8">
                    <h3 className="mb-8 text-2xl font-medium">Danh sách</h3>
                    <div className="grid grid-cols-10 gap-3">
                        {movieInfo?.movie?.episodes?.map((e, i) => {
                            return (
                                <div
                                    key={i}
                                    className="rounded-lg bg-[#0f0f0f] py-2 font-medium text-[#616161] transition-colors hover:cursor-pointer hover:bg-[#202020] hover:text-white"
                                >
                                    <p
                                        className="text-center"
                                        onClick={() => {
                                            if (!user?.accessToken) {
                                                alert('cần đăng nhập để thực hiện chức năng đánh giá');
                                                return;
                                            }

                                            const load = checkUserIdInOrder(user?.accessToken);
                                            load.then((e2) => {
                                                if (e2?.status === 200) {
                                                    if (e2?.data === true) {
                                                        openVideo(e?.link);
                                                        increaseViewNumber();
                                                    } else {
                                                        alert('cần đăng kí gói cước để thực hiện chức năng đánh giá');
                                                        navigate('/thanh-toan');
                                                    }
                                                } else {
                                                    navigate('/server-error');
                                                }
                                            }).catch(() => {
                                                navigate('/server-error');
                                            });
                                        }}
                                    >
                                        Tập {e?.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="mb-12 grid grid-cols-3 gap-x-5 text-[#d2d2d2]">
                    <div className="col-span-2">
                        <div className="font-medium">
                            <p className="mb-4 text-2xl text-white">{movieInfo?.movie?.name}</p>
                            <p className="mb-3 text-base">{movieInfo?.movie?.subName}</p>
                        </div>
                        <div className="mb-3 flex items-center text-sm">
                            <p>{movieInfo?.movie?.insertedDate.substring(0, 4)}</p>
                            <div className="mx-2 h-1 w-1 rounded-full bg-gray-50 opacity-80"></div>
                            <p>16+</p>
                            <div className="mx-2 h-1 w-1 rounded-full bg-gray-50 opacity-80"></div>
                            <p>
                                {movieInfo?.episodeCurrent}/{movieInfo?.episodeTotal} tập
                            </p>
                            <div className="mx-2 h-1 w-1 rounded-full bg-gray-50 opacity-80"></div>
                            <p className="capitalize">{movieInfo?.country}</p>
                            <div className="mx-2 h-1 w-1 rounded-full bg-gray-50 opacity-80"></div>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm">Thể loại: {movieInfo?.movie?.type}</p>
                        </div>
                        <div>
                            <p className="text-sm">{movieInfo?.movie?.summary}</p>
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
                                <p className="col-span-2 ">{movieInfo?.actor}</p>
                            </div>
                            <div className="grid grid-cols-3 py-1 text-sm text-[#d2d2d2]">
                                <p>Đạo diễn:</p>
                                <p className="col-span-2 ">{movieInfo?.director}</p>
                            </div>
                            <div className="grid grid-cols-3 py-1 text-sm text-[#d2d2d2]">
                                <p>Thể loại:</p>
                                <p className="col-span-2 ">{movieInfo?.movie?.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Review reviewNumber={movieInfo?.movie?.reviewNumber} movieId={movieId}></Review>
                </div>
                <div className="mt-5">
                    <Comment commentNumber={movieInfo?.movie?.commentNumber} movieId={movieId} />
                </div>
            </div>
        </div>
    );
}

export default View;
