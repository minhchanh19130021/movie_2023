import RecentlyTrendItem from "./RecentlyTrendItem";

function RecentlyTrend() {
    return (
        <div>
            <h3 className="mb-6 text-[21px] font-medium">Xu hướng gần đây</h3>
            <div className="">
               <RecentlyTrendItem/>
               <RecentlyTrendItem/>
               <RecentlyTrendItem/>
               <RecentlyTrendItem/>
               <RecentlyTrendItem/>
               <RecentlyTrendItem/>

            </div>
        </div>
    );
}

export default RecentlyTrend;
