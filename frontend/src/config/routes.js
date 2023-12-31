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
    order: 'thanh-toan',
    typeSearch: '/:theLoai/:trang',
    watchMovie: 'xem-phim',
    filter: 'loc/:trang',

    // admin
    movieCreate: 'quan-ly-phim/them-phim',
    movieDetailCreate: 'quan-ly-phim/them-chi-tiet-phim',
    movieList: 'quan-ly-phim/danh-sach',
    movieUpload: 'upload',
    episodeUpload: 'episode-upload',
};
export default routes;
