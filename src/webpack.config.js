module.exports = {
    entry: [
        './shallowCopy.js',
        './ngRoute/route.js',
        './ngRoute/routeParams.js',
        './ngRoute/directive/ngView.js'
    ],
    output: {
        filename: 'angular-route.js',
        // path: path.resolve(__dirname, 'build'),
    },
    externals: [
        /^angular$/,
    ]
 };