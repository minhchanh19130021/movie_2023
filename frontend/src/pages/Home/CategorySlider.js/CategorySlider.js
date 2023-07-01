import { useRef } from 'react';
import Slider from 'react-slick';

function CategorySlider() {
    const slider = useRef(null);

    const settingsCategory = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    return (
        <div className="relative">
            <h2 className="mb-4 text-2xl font-medium"> Danh mục </h2>
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
            <Slider ref={slider} {...settingsCategory}>
                <div>
                    <img
                        src="https://images.fptplay.net/media/photo/OTT/2023/03/22/1679457457_3IN.png?w=282&mode=scale&fmt=webp"
                        alt="category-img"
                        className="w-[236px] cursor-pointer rounded-xl"
                    />
                </div>
                <div>
                    <img
                        src="https://images.fptplay.net/media/photo/OTT/2023/03/22/1679457443_L16.png?w=282&mode=scale&fmt=webp"
                        alt=""
                        className="w-[236px] cursor-pointer rounded-xl"
                    />
                </div>
                <div>
                    <img
                        src="https://images.fptplay.net/media/photo/OTT/2023/03/22/1679457468_7JC.png?w=282&mode=scale&fmt=webp"
                        alt=""
                        className="w-[236px] cursor-pointer rounded-xl"
                    />
                </div>
                <div>
                    <img
                        src="https://images.fptplay.net/media/photo/OTT/2023/03/22/1679456744_VOT.png?w=282&mode=scale&fmt=webp"
                        alt=""
                        className="w-[236px] cursor-pointer rounded-xl"
                    />
                </div>
                <div>
                    <img
                        src="https://images.fptplay.net/media/photo/OTT/2023/03/22/1679457431_0VP.png?w=282&mode=scale&fmt=webp"
                        alt=""
                        className="w-[236px] cursor-pointer rounded-xl"
                    />
                </div>
                <div>
                    <img
                        src="https://images.fptplay.net/media/photo/13_05_2022/group-1331113-05-2022_15g47-47.png?w=282&mode=scale&fmt=webp"
                        alt=""
                        className="w-[236px] cursor-pointer rounded-xl"
                    />
                </div>
                <div>
                    <img
                        src="https://images.fptplay.net/media/photo/OTT/2023/03/22/1679456705_QV2.png?w=282&mode=scale&fmt=webp"
                        alt=""
                        className="w-[236px]"
                    />
                </div>
                <div>
                    <img
                        src="https://images.fptplay.net/media/photo/OTT/2023/03/22/1679456522_I8Z.png?w=282&mode=scale&fmt=webp"
                        alt=""
                        className="w-[236px] cursor-pointer rounded-xl"
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

export default CategorySlider;
