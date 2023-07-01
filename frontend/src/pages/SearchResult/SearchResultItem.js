import { NavLink } from "react-router-dom";

function SearchResultItem() {
    return (
        <NavLink className="rounded-lg mb-12">
            <img
                src="https://static.fptplay.net/static/img/share/video/OTT/playlist/2023/03/22/daloyeuem1920x1080_1679458926600.jpg?w=282&mode=scale&fmt=webp"
                alt="result-search-img"
                className="rounded-lg "
            />
            <p className="mt-5 font-medium capitalize">Đã lỡ yêu em</p>
        </NavLink>
    );
}

export default SearchResultItem;
