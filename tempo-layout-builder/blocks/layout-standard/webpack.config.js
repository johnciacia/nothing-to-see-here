const externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/server': 'ReactDOMServer',
    tinymce: 'tinymce',
    moment: 'moment',
    jquery: 'jQuery',
    wp: 'wp',
};

const entryPointNames = [
    'blocks',
    'components',
    'date',
    'editor',
    'element',
    'i18n',
    'utils',
    'data',
    'edit-post',
];

const packageNames = [
    'hooks',
];

[ ...entryPointNames, ...packageNames ].forEach( name => {
    externals[ `@wordpress/${ name }` ] = {
        this: [ 'wp', name ],
    };
} );

var webpack = require( 'webpack' ),
    NODE_ENV = process.env.NODE_ENV || 'development',
    webpackConfig = {
        entry: './block.js',
        output: {
            path: __dirname,
            filename: 'block.build.js',
        },
        module: {
            loaders: [
                {
                    test: /.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin( {
                'process.env.NODE_ENV': JSON.stringify( NODE_ENV )
            } ),
        ],
        externals,
    };

if ( 'production' === NODE_ENV ) {
    webpackConfig.plugins.push( new webpack.optimize.UglifyJsPlugin() );
}

module.exports = webpackConfig;
