//Konfiguracja Webpack

module.exports = {
    entry: "./scripts/js/app.jsx",
    output: { filename: "./scripts/js/out.js" },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    watch: true,
    module: {
        rules: [ {
            test: /\.jsx$/,  exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'stage-2', 'react'] }
        }
        ]
    }
};
