# Create folders
mkdir config src public
# Stub files
touch \
    .gitignore \
    babel.config.js \
    src/index.js \
    config/webpack.config.js \
    config/dev.webpack.config.js \
    config/prod.webpack.config.js \
    public/index.html \
    netlify.toml
# Populate files
tee -a .gitignore <<DOC
node_modules
.coverage
.DS_Store
DOC
tee -a public/index.html <<DOC
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GT Reacts</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
DOC
 
tee -a babel.config.js <<DOC
module.exports = {
  "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
  ],
  "plugins": [
      "@babel/plugin-transform-runtime"
  ]
}
DOC
tee -a src/index.js << DOC
import React from 'react';
import ReactDOM from 'react-dom';
const App = () => <h1>Hello World!</h1>
ReactDOM.render(<App />, document.getElementById('root'));
DOC
tee -a config/dev.webpack.config.js << DOC
const config = require('./webpack.config.js');
config.devServer = {
  historyApiFallback: true,
  port: 8080,
  liveReload: true
};
config.devtool = 'inline-source-map';
module.exports = config;
DOC
tee -a config/webpack.config.js << DOC
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '../'); // the root of your project
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, 'public'); // the root of the frontend, i.e. html file

const config = {
  entry: [path.resolve(ROOT_DIRECTORY, 'src/index.js')], // the main JavaScript file of the project
  output: {
    // instructions for compiling the code
    path: path.resolve(ROOT_DIRECTORY, 'build'), // the file where the compiled code should go
    filename: 'bundle.js', // the file name of the compiled code
    publicPath: '/', // specifies the base path for all the assets within your application.
  },
  mode: 'development', // tells webpack to use its built-in optimisations according to the mode
  resolve: {
    // instructions on how to resolve modules
    modules: [path.resolve('node_modules'), 'node_modules'], // tells webpack where to look for node_modules
  },
  performance: {
    // notifies you if assets and entry points exceed a specific file limit
    hints: false,
  },
  plugins: [
    // plugins we are using to help with compiling
    new HtmlWebpackPlugin({
      // used to add the JavaScript code to the HTML
      template: path.join(PUBLIC_DIRECTORY, 'index.html'),
    }),
  ],
  module: {
    // helpers we want webpack to use
    rules: [
      // specific instructions for each helper
      { 
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: [".js", ".jsx"]
        }, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      }, // transpile JavaScript files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, // transpile css files
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ['file-loader'],
      }, // transpile image files
    ],
  },
};

module.exports = config;
DOC
tee -a config/prod.webpack.config.js << DOC
const config = require('./webpack.config.js');

config.mode = 'production';
module.exports = config;
DOC
tee -a netlify.toml << DOC
[build]
    command = "npm run build" 
    publish = "/build" 
DOC
# Create npm package & install dependencies & storybook
npm init -y
npm i -D \
    webpack webpack-cli webpack-dev-server html-webpack-plugin \
    babel-loader style-loader css-loader file-loader \
    @babel/core @babel/preset-env \
    @babel/plugin-transform-runtime \
    @babel/preset-react
npm i \
    react \
    react-dom \
    jest \
    axios \
    react-router-dom@5.3.0
# Add npm scripts
npx npm-add-script \
  -k "dev" \
  -v "webpack serve --mode development --config config/dev.webpack.config.js" \
  --force
npx npm-add-script \
  -k "build" \
  -v "webpack --config config/prod.webpack.config.js" \
  --force
# Initialise git repository
git init