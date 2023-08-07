import { NavLink } from "react-router-dom";

function MovieCardHistory({image, title, duration, category, to, viewNumber}) {
    return (
        <div className="flex overflow-hidden rounded-lg bg-[#202020] shadow-lg mb-2">
            <img
                className="w-1/3 select-none"
                src={image}
                alt="card-history"
            />
            <div className="flex-grow p-4">
                <h2 className="mb-2 text-xl font-bold">{title}</h2>
                <p className="text-sm mb-1 text-[#616161]">{`Số tập: ${duration}`}</p>
                <p className="text-sm mb-1 text-[#616161]">{`Thể loại: ${category}`}</p>
                <p className="text-sm mb-2 text-[#616161]">{`Lượt xem: ${viewNumber}`}</p>

                <NavLink to={to || '/'}
                    className=" rounded bg-orange-600 px-4 py-2 font-bold text-white hover:bg-orange-700 text-sm"
                >
                    Xem phim
                </NavLink>

          

            </div>
        </div>
    );
}

export default MovieCardHistory;
