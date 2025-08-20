// A partir de qual arquivo será feito o empacotamento e onde iremos pegar esse projeto utilizado e largar ele aonde?

const path = require('path')

const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:
                {
                    loader:"babel-loader"
                }
            }
        ]
    },
    plugins:[
        new HTMLWebPackPlugin()
    ]

}
