// Pegar numero aleatorio
const na = Math.floor(Math.random() * 101);

//errar e acertar
function acertou(){
    document.body.style.backgroundColor = "white";
    setTimeout(() => { document.body.style.backgroundColor = "green"; }, 700);
};
function erroua(){
    document.body.style.backgroundColor = "white";
    setTimeout(() => { document.body.style.backgroundColor = "red"; }, 700);
};
function erroub(){
    document.body.style.backgroundColor = "white";
    setTimeout(() => { document.body.style.backgroundColor = "red"; }, 700);
}
function salvarn(){
    var n = document.querySelector('#numero').value;
    // Apos 1 hora e 11 minutos, consegui sozinho resolver o problema que a pagina recarregava e perdia o "n", mas trocando o input type pra button e adicionando evento de onclick resolveu

    if (n > na){
        erroua();
        console.log('muito alto')
    }
    else if (n < na){
        erroub();
        console.log('muito baixo')
    }
    else{
        acertou();
    }

};