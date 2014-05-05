var request = require('request');


request.get('https://news.ycombinator.com/rss', function(err,req,body){
  if (!err) {
    console.log(body);
  }
})
