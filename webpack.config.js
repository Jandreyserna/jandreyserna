const path = require('path');

module.exports = {
    entry: './src/main.js', // Cambia esto a tu archivo de entrada
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // URL de tu backend
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Ajusta según tus necesidades
                    },
                },
            },
            // Otras reglas de carga de archivos (CSS, imágenes, etc.)
        ],
    },
};