var express = require('express'),
    path = require('path'),
    app = express(),
    port = 4444,
    bodyParser = require('body-parser');

//jsx transpiler
require('node-jsx').install();

//static assets
app.use(express.static(path.join(__dirname,'public')));
//view path
app.set('views', path.join(__dirname,'views'));
//ejs templating
app.set('view engine', 'ejs');

//import routes
require('./app/routes/core-routes.js')(app);

//404
app.get('*', function(req,res){
    res.json({
	     route: 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server up and running at port : ' + port);
