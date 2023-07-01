import { useRef } from 'react';
import Slider from 'react-slick';

function HotBanner() {
    const slider = useRef(null);

    const settingsHot = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    return (
        <div>
            <div className="relative">
                <h2 className="mb-4 text-2xl font-medium"> Mới ra mắt </h2>
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
                <Slider ref={slider} {...settingsHot}>
                    <div className="rounded-xl">
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2022/09/08/phi-ho-ngoai-truyen-40-tap-fpt-play-1662619770090_Portrait_origin.jpg?w=282&mode=scale&fmt=webp"
                            alt="category-img"
                            className="cursor-pointer rounded-xl px-2"
                        />
                    </div>
                    <div className="rounded-xl">
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2022/07/27/ba-kiep-may-man-gap-duoc-em-40-tap-fpt-play-1658898615109_Portrait_origin.jpg?w=282&mode=scale&fmt=webp"
                            alt=""
                            className="cursor-pointer rounded-xl px-2"
                        />
                    </div>
                    <div className="rounded-xl">
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2022/08/09/eve_2022_kr_b_16t_v3_lg09-08-2022_16g54-13.jpg?w=282&mode=scale&fmt=webp"
                            alt=""
                            className="cursor-pointer rounded-xl px-2"
                        />
                    </div>
                    <div className="rounded-xl">
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/20/con-so-bi-mat-fpt-play-1687244013855_Portrait_origin.jpg?w=282&mode=scale&fmt=webp"
                            alt=""
                            className="cursor-pointer rounded-xl px-2"
                        />
                    </div>
                    <div className="rounded-xl">
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/02/06/theprincessweiyang_lg_tm06-02-2023_14g40-22.jpg?w=282&mode=scale&fmt=webp"
                            alt=""
                            className="cursor-pointer rounded-xl px-2"
                        />
                    </div>
                    <div className="rounded-xl">
                        <img
                            src="https://images.fptplay.net/media/14_09_2021/poster-114-09-2021_00g08-25.jpg?w=282&mode=scale&fmt=webp"
                            alt=""
                            className="cursor-pointer rounded-xl px-2"
                        />
                    </div>
                    <div className="rounded-xl">
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/13/hai-muoi-bat-hoac-phan-2-fpt-play-1686629873224_Portrait_origin.jpg?w=282&mode=scale&fmt=webp"
                            alt=""
                            className="px-2"
                        />
                    </div>
                    <div className="rounded-xl">
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/05/25/nuoc-co-di-vao-tim-em-fpt-play-1684979922356_Portrait_origin.jpg?w=282&mode=scale&fmt=webp"
                            alt=""
                            className="cursor-pointer rounded-xl px-2"
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
        </div>
    );
}

export default HotBanner;
