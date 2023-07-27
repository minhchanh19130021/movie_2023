import { NavLink } from 'react-router-dom';

function SearchResultItem(to, img) {
    return (
        <NavLink to={to || "/"} className="mb-12 rounded-lg !text-white">
            <img
                src={img}
                // onError={({ currentTarget }) => {
                //     currentTarget.onerror = null;
                //     currentTarget.src =
                //         'https://firebasestorage.googleapis.com/v0/b/movie-2023-5ec7b.appspot.com/o/image%2Fplaceholder%2Fimageonline-co-placeholder-image.png?alt=media&token=47d0f9fc-a5d1-4dc6-8a59-c349c858197e';
                // }}
                alt="result-search-img"
                className="rounded-lg mb-2"
            />
        </NavLink>
    );
}

export default SearchResultItem;
