import { Link } from 'react-router-dom';

function MovieComponent(props) {

    return (
        <div className='w-1/4 mb-3'>
            <Link to={`/xem-video/${props.movie.slug}`} >
                    <div className="rounded-xl">
                        <img
                            src={props.movie.poster}
                            alt=""
                            className="cursor-pointer rounded-xl px-2"
                        />
                        <div className='text-center mt-2'>
                            <b className='text-blue-600/75'> {props.movie.name}</b>
                            <p className='text-sm'>{props.movie.type}</p>
                        </div>
                    </div>
             </Link>
        </div>
    );
}

export default MovieComponent;
