const webpack = require('webpack')
const path = require('path')


module.exports={
    entry: path.resolve(__dirname,"./src/index.js"),
    output:{
        path: path.resolve(__dirname,"./server/public"),
        filename:"bundle.js"
    },
    module:{
        rules:[
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,     
        use: [
          'style-loader', // creates style nodes from JS strings      
          'css-loader', // translates CSS into CommonJS
          ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
    },
    mode:'development',
    
}