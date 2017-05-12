
var whitecoin = require('./lib');

var client = new whitecoin.Client({
  host: 'localhost',
  port: 15815,
  user: 'yourusername',
  pass: 'youpassword'
});

client.cmd('getbalance', '*', 6, function(err, balance){
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

