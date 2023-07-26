import { useEffect } from 'react';
import { getPosts } from '~/services/postServices';
import BannerSlider from './BannerSlider/BannerSlider';
import CategorySlider from './CategorySlider.js/CategorySlider';
import HotBanner from './HotBanner/HotBanner';
import ReleaseSlider from './ReleaseSlider/ReleaseSlider';
import MovieSuggetions from './MovieSuggetions/MovieSuggetions';


function Home() {
    useEffect(() => {
        const fetchPost = async () => {
            const result = await getPosts();
            console.log(result);
        };
        fetchPost();
    }, []);


   

    return (
        <div className="max-w-full">
            <div className="mx-auto max-w-[1200px]">
                <div className="">
                    <BannerSlider />
                </div>
                <div className="mb-5 mt-10">
                    <CategorySlider />
                </div>
                <div className="">
                    <ReleaseSlider />
                </div>
                <div className="">
                    <HotBanner />
                </div>
                <div className="">
                    <MovieSuggetions name="Phim mới cập nhật" />
                </div>
            </div>
        </div>
    );
}

export default Home;
