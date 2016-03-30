var express = require('express');
var app = express();
var port=process.env.PORT || process.env.IP;

app.get('/', function(req, res) {
    if (req.url === '/favicon.ico') return;
    res.json({
        "Ip Address": req.headers['x-forwarded-for'] ||
                   req.connection.remoteAddress,
        "Language": req.headers["accept-language"].split(",")[0],
        "Software": req.headers["user-agent"].split('(')[1].split(')')[0]
    });
});
app.listen(port, function() {
    console.log('Node app is running on port', port);
})