let path = require('path');
let express = require('express');
let webpack = require('webpack');
let config = require('../../webpack.config');
let compiler = webpack(config);
let server = require('http').Server(app);
let io = require('socket.io')(server);
let bodyParser = require('body-parser');
let morgan = require('morgan')
let app = express();

import api from './api'



app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(morgan('combined'))
app.use('/api', api)


app.use(function(error,req,res){
  res.send('there was an error')
})


app.listen(4000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:4000');
});
