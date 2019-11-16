const mongoose = require('mongoose');

//Definição dos modelos

const addUserSchema = new mongoose.Schema({
    userId:{
        type : Schema.Type.ObjectId.Array,
        unique: true
    },
    nome,
    telefone,
    cpf,
    email,
    nascimento,
    senha,
    cep,
    bairro,
    endereco,
    numero,
    estado: String
});

const transationSchema = new mongoose.Schema({
    idTransition: {
        type : Schema.Type.ObjectId.Array,
        unique: true
    },
    dataIn: Date,
    dataOut: Date,
    imgItem : [],
    payment: String,
    userIn: String,
    userOut: String
});

const intemSchema = new mongoose.Schema({
    idItem: {
        type : Schema.Type.ObjectId.Array,
        unique: true
    },
    imgItem: [],
    nameItem,
    description: String,
    value: Number
});

//Exportando os modelos para uso
module.exports = mongoose.model('newUser',addUserSchema);
module.exports = mongoose.model('newTransation',transationSchema);
module.exports = mongoose.model('newItem',intemSchema);