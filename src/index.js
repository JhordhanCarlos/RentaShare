const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
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

//Connecting to mongodb
mongoose.connect('mongodb+srv://jhordhan:02031999Jh@clusterrentashare-wv0ze.mongodb.net/test?retryWrites=true&w=majority');

mongoose.connection.once('open', ()=>{
    console.log("Conectado com o banco de dados");
}).on('error',(error) =>{
    console.log("Erro: " + error);
});
