let express = require('express');
let app = express();
let bodyParser = require('body-parser');
//relative path (path for the folder. Views is folder name that contains HTML files)
let viewsPath = __dirname + "/views/";
let db = [];
app.engine("html", require('ejs').renderFile)
app.set('views engine', 'html')
app.use(express.static('images'));
app.use(express.static('css'));


app.get('/', function (request, response) {
    response.sendFile(viewsPath + "index.html")
});

app.get('/addnewtask', function (request, response) {
    response.sendFile(viewsPath + "addtask.html");
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/addtask1', function (request, response) {
    console.log(request.body);
    db.push(request.body);
    response.render(viewsPath + "addtask.html", {
        task: db
    });
});

app.get('/listalltask', function (request, response) {
    response.render(viewsPath + "list.html", {
        task: db
    });
});

app.listen(8080);