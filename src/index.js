const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Routes
app.use(require('./routes/index'))

app.set('view engine', 'ejs');

app.listen(app.get('port'), () =>{
    console.log('server iniciado na porta', app.get('port'))
});