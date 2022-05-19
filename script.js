const na = Math.floor(Math.random() * 101);
// Pegar numero aleatorio
function salvarn(){
    var n = document.querySelector('#numero').value;
    // Apos 1 hora e 11 minutos, consegui sozinho resolver o problema que a pagina recarregava e perdia o "n", mas trocando o input type pra button e adicionando evento de onclick, resolveu
    if (n > na){
        console.log("Seu número foi muito alto");
    }
    else if (n < na){
        console.log("Seu número foi muito baixo");
    }
    else{
        console.log("Voce acertou");
    }
};