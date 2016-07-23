var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res, next) {

  var body = req.body;

  // PRからくるイベント https://developer.github.com/v3/activity/events/types/#pullrequestevent
  // actionが"labeled"で、labelの中に "xxxxx" が含まれていたら〜する、という実装
  console.log('action :' + body.action);
  console.log('せっかくなのでラベル : ' + JSON.stringify(body.label));


  res.send('Got it');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
