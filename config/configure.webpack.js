module.exports = {
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '-',
            minSize: 300000,
            maxSize: 1000000,

            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
}
