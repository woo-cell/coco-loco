const path = require("path");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'assets/[name][ext]',
        clean: true,
    },
};