import { useRef } from 'react';
import Slider from 'react-slick';

function ReleaseSlider() {
    const slider = useRef(null);

    const settingsRelease = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };
    return (
        <div>
            <div className="relative">
                <h2 className="mb-4 text-2xl font-medium "> Mới ra mắt </h2>
                <button
                    className="absolute left-0 top-12 z-20 h-4/5 hover:bg-gradient-to-r from-black to-[#4241415b] w-11 text-[#4c4d50] transition-colors hover:text-white "
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
                <Slider ref={slider} {...settingsRelease}>
                    <div>
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/28/truong-phong-do-fpt-play-1687944599033_Landscape.jpg?w=400&mode=scale&fmt=webp"
                            alt="category-img"
                            className="w-[390px] cursor-pointer rounded-xl"
                        />
                    </div>
                    <div>
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/20/ao-giap-vang---thanh-chien-khoi-dau-fpt-play-1687257513689_Landscape.jpg?w=400&mode=scale&fmt=webp"
                            alt=""
                            className="w-[390px] cursor-pointer rounded-xl"
                        />
                    </div>
                    <div>
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/13/mua-mam-mua-muoi-fpt-play-1686620620569_Landscape.jpg?w=400&mode=scale&fmt=webp"
                            alt=""
                            className="w-[390px] cursor-pointer rounded-xl"
                        />
                    </div>
                    <div>
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/22/jadoo-tinh-nghich-phan-7-fpt-play-1687428727519_Landscape.jpg?w=400&mode=scale&fmt=webp"
                            alt=""
                            className="w-[390px] cursor-pointer rounded-xl"
                        />
                    </div>
                    <div>
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/21/eddy-hieu-ky-fpt-play-1687342095119_Landscape.jpg?w=400&mode=scale&fmt=webp"
                            alt=""
                            className="w-[390px] cursor-pointer rounded-xl"
                        />
                    </div>
                    <div>
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/21/the-gioi-do-ngot-cua-be-phan-11-fpt-play-1687332564737_Landscape.jpg?w=400&mode=scale&fmt=webp"
                            alt=""
                            className="w-[390px] cursor-pointer rounded-xl"
                        />
                    </div>
                    <div>
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/22/buong-bo-qua-khu-fpt-play-1687428216552_Landscape.jpg?w=400&mode=scale&fmt=webp"
                            alt=""
                            className="w-[390px]"
                        />
                    </div>
                    <div>
                        <img
                            src="https://images.fptplay.net/media/OTT/VOD/2023/06/26/truong-phong-do-fpt-play-1687757730030_Landscape.jpg?w=400&mode=scale&fmt=webp"
                            alt=""
                            className="w-[390px] cursor-pointer rounded-xl"
                        />
                    </div>
                </Slider>
                <button
                    className="absolute right-0 top-12 z-20 h-4/5 hover:bg-gradient-to-l from-black to-[#4241415b] w-11 text-[#4c4d50] transition-colors hover:text-white "
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

export default ReleaseSlider;
