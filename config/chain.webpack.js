const { VUE_APP_TITLE } = process.env
const webpack = require('webpack')

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = (config) => {
    const alias = config.resolve.alias
    alias
        .set('@', resolve('../src'))
        .set('components', resolve('../src/components'))
        .set('utils', resolve('../src/utils/utils.js'))
        .set('lmap', resolve('../src/utils/linkcm-map/linkcm-map'))
        .set('lpmap', resolve('../src/utils/plan-map/linkcm-map'))
        .set('sysconfig', resolve('../src/sys-config'))
        .set('WD', resolve('../src/utils/WinDrag'))
        .set('store', resolve('../src/store'))
        .set('TU', resolve('../src/utils/tools/TimeUtil'))

    config.plugin('provide').use(webpack.ProvidePlugin, [
        {
            $: 'jquery',
            utils: 'utils',
            ol: 'openlayers',
            lpmap: 'lpmap',
            lmap: 'lmap',
            sysconfig: 'sysconfig',
            WD: 'WD',
            TU: 'TU',
        },
    ])

    config.plugin('html').tap((args) => {
        args[0].title = VUE_APP_TITLE
        return args
    })

    config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true
        return args
    })
}
