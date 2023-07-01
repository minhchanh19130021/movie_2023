import { useRef } from 'react';
import Slider from 'react-slick';

function BannerSlider() {
    const slider = useRef(null);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="relative">
            <button
                className="absolute left-0 top-1/2 z-20 h-11 w-11 text-[#4c4d50] transition-colors hover:text-white"
                onClick={() => slider?.current?.slickPrev()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-11 w-11"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <Slider ref={slider} {...settings}>
                <div className="relative rounded-xl">
                    <img
                        src="https://images.fptplay.net/media/OTT/VOD/2023/01/30/cam-tu-vi-uong-fpt-play-1675073674333_Background_origin.jpg?w=1280&mode=scale&fmt=webp"
                        alt=""
                        className="rounded-xl"
                    />
                    <div className="absolute bottom-5 left-10">
                        <div className="pb-4">
                            <p className="font-bold">Tên phim</p>
                        </div>
                        <div className="flex items-center pb-4">
                            <ul className="flex list-disc items-center space-x-14 font-medium ">
                                <li>2022</li>
                                <li>16+</li>
                                <li>40/40 tập</li>
                                <li>Trung Quốc</li>
                            </ul>
                        </div>
                        <div className=" flex items-center">
                            <button className="  mr-4 flex items-center rounded-lg bg-orange-600 px-[44px] py-[14px] font-medium hover:bg-orange-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6 text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Xem ngay
                            </button>
                            <button className="rounded-full bg-[#202020] px-3 py-3 hover:text-orange-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl">
                    <img
                        src="https://images.fptplay.net/media/OTT/VOD/2023/06/13/hai-muoi-bat-hoac-phan-2-fpt-play-1686629879091_Background_origin.jpg?w=1280&mode=scale&fmt=webp"
                        alt=""
                        className="rounded-xl"
                    />
                </div>
                <div className="rounded-xl">
                    <img
                        src="https://images.fptplay.net/media/OTT/VOD/2022/09/08/phi-ho-ngoai-truyen-40-tap-fpt-play-1662619773855_Background_origin.jpg?w=1280&mode=scale&fmt=webp"
                        alt=""
                        className="rounded-xl"
                    />
                </div>
            </Slider>
            <button
                className="absolute right-0 top-1/2 z-20 h-11 w-11 text-[#4c4d50] transition-colors hover:text-white"
                onClick={() => slider?.current?.slickNext()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-11 w-11"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}

export default BannerSlider;
