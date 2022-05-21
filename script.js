const na = Math.floor(Math.random() * 101);

var tentativas = 0

function acertou(){
    document.body.style.backgroundColor = "white"; 
    setTimeout(() => {
        window.location.href = "acerto.html"; }, 700);
}
;
function erroua(){
    document.body.style.backgroundColor = "white";
    setTimeout(() => { document.body.style.backgroundColor = "rgb(231, 47, 47)"; }, 700);

    var h1Novo = document.createElement("h1");
    var conteudoNovo = document.createTextNode("Tente um número mais baixo");
    h1Novo.setAttribute("id", "h1novoea");
    h1Novo.appendChild(conteudoNovo);

    setTimeout(() => { document.body.appendChild(h1Novo); }, 700);

};
function erroub(){
    document.body.style.backgroundColor = "white";
    setTimeout(() => { document.body.style.backgroundColor = "rgb(231, 47, 47)"; }, 700);

    var h1Novo = document.createElement("h1");
    var conteudoNovo = document.createTextNode("Tente um número mais alto");
    h1Novo.setAttribute("id", "h1novoeb");
    h1Novo.appendChild(conteudoNovo);

    setTimeout(() => { document.body.appendChild(h1Novo); }, 700);

}

function salvarn(){
    var n = document.querySelector('#numero').value;

    if (n > na){
        erroua();
        tentativas += 1
    }
    else if (n < na){
        erroub();
        tentativas += 1
    }
    else{
        acertou();
    }

};