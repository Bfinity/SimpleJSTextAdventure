var express = require('express');
var app = express();
var path = require('path');

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/view', express.static(__dirname + '/view'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'view', '/index.html'));
});

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
