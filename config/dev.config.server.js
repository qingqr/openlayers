const { VUE_APP_REQUEST_HOST_COMMOM, VUE_APP_REQUEST_HOST_SERVER } = process.env

module.exports = {
    host: 'localhost',
    port: 5007,
    // 代理
    proxy: {
        '/host': {
            target: VUE_APP_REQUEST_HOST_COMMOM,
            ws: true,
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '/host': '',
            },
        },
        '/dss-opp-onemap': {
            // target: 'https://gd.yjzh.org.cn:7003/',
            // target: 'https://210.76.74.226/',
            // target: 'http://120.24.210.187:13044/',
            target: VUE_APP_REQUEST_HOST_COMMOM,
            ws: true,
            changeOrigin: true,
            secure: false,
        },
        '/dss-opp-yuan': {
            // target: 'https://gd.yjzh.org.cn:7003/',
            // target: 'https://210.76.74.226/',
            // target: 'http://120.24.210.187:13044/',
            target: VUE_APP_REQUEST_HOST_COMMOM,
            ws: true,
            changeOrigin: true,
            secure: false,
        },
        '/serverHost': {
            // target: 'https://gd.yjzh.org.cn:7003/',
            // target: 'https://210.76.74.226',
            // target: 'http://120.24.210.187:13044/',
            target: VUE_APP_REQUEST_HOST_SERVER,
            ws: true,
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '/serverHost': '',
            },
        },
    }
}
