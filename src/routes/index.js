//Rotas de navegação
const router = require('express').Router();


//Home
router.get('/', (req, res) =>{
    res.render('index');
})
//Itens Alugados
router.get('/itens-alugados', (req, res) =>{
    res.render('itensAlugados');
})
//Meus Itens
router.get('/meus-itens', (req, res) =>{
    res.render('meusItens');
})

//Adicionar Itens
router.get('/adicionar-item', (req, res) =>{
    res.render('adicionarItem');
})

//Tela de Aluguel
router.get('/tela-alugando', (req, res) =>{
    res.render('telaAlugando');
})

module.exports = router;