import { NavLink } from "react-router-dom";

function RecentlyTrendItem() {
    return (
        <NavLink to="" className="flex items-center mb-4">
            <img
                src="https://images.fptplay.net/media/OTT/VOD/2022/07/15/lovelikethegalaxy_2022_cn_b_56t_docquyen_bghd15-07-2022_16g33-38.jpg?w=282&mode=scale&fmt=webp"
                alt=""
                className="h-[90px] w-[160px] rounded-lg"
            />
            <div className="ml-4">
                <p className="mb-4 line-clamp-1">Tinh Hà Xán Lạn</p>
                <div className="flex items-center">
                    <div className="mr-3 flex items-center">
                        <p>2022</p>
                        <div className="mx-3 h-1 w-1 rounded-full bg-slate-400"></div>
                    </div>
                    <div className="mr-3 flex  items-center">
                        <p>16+</p>
                        <div className="mx-3 h-1 w-1 rounded-full bg-slate-400"></div>
                    </div>
                    <div className="mr-3 flex  items-center">
                        <p>56/56 tập</p>
                        <div className="mx-3 h-1 w-1 rounded-full bg-slate-400"></div>
                    </div>
                    <div className=" mr-3 flex items-center">
                        <p>Trung quốc</p>
                        <div className="mx-3 h-1 w-1 rounded-full bg-slate-400"></div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default RecentlyTrendItem;
