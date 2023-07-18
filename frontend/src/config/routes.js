const routes = {
    home: '/',
    search: '/tim-kiem',
    searchResult: '/tim-kiem/:tuKhoa/:trang',
    videoView: '/xem-video/:slug',
    personalInformation: 'tai-khoan/thong-tin-ca-nhan',
    historyMovie: 'tai-khoan/lich-su-da-xem',
    favorateMovie: 'tai-khoan/danh-sach-yeu-thich',
    notFound: 'not-found',
    serverError: 'server-error',

    // admin
    movieCreate: 'quan-ly-phim/them-phim',
    movieDetailCreate: 'quan-ly-phim/them-chi-tiet-phim',
    movieList: 'quan-ly-phim/danh-sach',
};
export default routes;
