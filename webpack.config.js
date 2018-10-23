//Konfiguracja Webpack

module.exports = {
    entry: "./scripts/js/app.jsx",
    output: { filename: "./scripts/js/out.js" },
    watch: true,
    module: {
        rules: [ {
            test: /\.jsx$/,  exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] }
        },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    }
};
