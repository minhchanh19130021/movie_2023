import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';

function WatchMovie() {
    const location = useLocation();
    return (
        <div className="h-full w-full py-24">
            <div className="flex h-full w-full flex-wrap items-center justify-center">
                <iframe
                    className="absolute"
                    height="100%"
                    width="100%"
                    allowFullScreen
                    frameBorder="0"
                    src={location?.state?.link}
                ></iframe>
            </div>
        </div>
    );
}
export default WatchMovie;
