const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use((req, res, next) => {
    //     req.header("Content-Type", "application/json");
    //     res.header("Access-Control-Allow-Origin", "*");
    //     next();
    // });

    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};
