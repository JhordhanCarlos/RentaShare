let dados = [
    {
        "nomeProduto":"PlayStation 4",
        "link_image":"https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=6064986&qld=90&l=430&a=-1",   
        "desc" : "",
        "valor" : "10",
        "data_inicio":"",
        "data_fim":""
    },
    {
        "nomeProduto":"Xbox One",
        "desc" : "",
        "link_image":"https://i.zst.com.br/images/console-xbox-one-s-1-tb-microsoft-hdr-4k-photo131312234-12-3d-14.jpg",
        "valor" : "10",
        "data_inicio":"",
        "data_fim":""
    },
    {
        "nomeProduto":"Nintendo Switch",
        "desc" : "",
        "link_image":"https://images-americanas.b2w.io/produtos/01/00/oferta/51631/7/51631734_1GG.jpg",
        "valor" : "20",
        "data_inicio":"",
        "data_fim":""
    }
]

document.getElementById("alugar1").addEventListener('click',function(event){
console.log("você alugou" + " " + dados[0].nomeProduto);
})

window.onload = montaCard = (img, nome, valor) =>{
    this.img = dados.link_image;
    this.nome = dados.nomeProduto;
    this.valor = dados.valor;

   let card =
    '<div class="card" style="width: 20rem;" id="xbox">'
    '<img src="' + img + '"' + 'class="card-img-top" alt="...">'
        '<div class="card-body">'
            '<p id="produto" class="card-text">'+ nome +'</p>'
            '<p id="valor">Valor: R$'+ valor +'</p>'
            
            '<button type="button" class="btn btn-primary">Alugar</button>'
        '</div>'
    '</div> '

   return document.getElementById("switch").innerHTML = card;
}

//montaCard();



