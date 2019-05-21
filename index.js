const express = require('express');
const app = express();
const render = require('./render');

require('@babel/register');
require('@babel/polyfill');

app.get('/', function (req, res) {
  const response =`
    <!doctype html>
      <html>
      <head>
          <title>React Repeat</title>
      </head>
      <body>
          <div id="root">${render()}</div>
      </body>
      </html>`;
  res.send(response);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});