/* 
 * server.js
 * 
 * The main file, to be invoked at the command line. Calls app.js to get 
 * the Express app object.
 */

var port = process.env.PORT || 3000;

var app = require('./app').init (port);

var locals = {
        title: 		 'UrbanHarvester',
        description: 'A Node.js applicaton bootstrap using Express 3.x, EJS, Twitter Bootstrap 2, and CSS3',
        author: 	 'UrbanHarvester',
        _layoutFile: true
    };
// Declare variables
var fs = require('fs'),
    obj = {};

// Read the file and send to the callback
fs.readFile('static/match.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    // You can now play with your datas
}

app.get('/', function(req,res){

    locals.date = new Date().toLocaleDateString();
    locals.data = obj;
    res.render('home.ejs', locals);
});

app.get('/map', function(req,res){

    locals.date = new Date().toLocaleDateString();
    locals.data = obj;
    res.render('arjisview.ejs', locals);
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});
