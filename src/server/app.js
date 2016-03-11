let path = require('path');
let express = require('express');
let webpack = require('webpack');
let config = require('../../webpack.config');
let compiler = webpack(config);
let server = require('http').Server(app);
let io = require('socket.io')(server);
let bodyParser = require('body-parser');

let app = express();

import {router as auth, authorize} from './auth'




const PATHS ={
  node: path.join(__dirname,'..','..','node_modules'),
  indexHTML: path.join(__dirname, '..','..','index.html'),
  dist: path.join(__dirname,'..','..','dist')
}

app.use(express.static(PATHS.node))

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



app.get('*', function(req, res) {
  res.sendFile(PATHS.indexHTML);
});





app.listen(8080, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8080');
});
