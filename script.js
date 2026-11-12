
//seleciona os três botões

const botaoPrincipal = document.querySelector("#btn-principal");
const botaoSecundario = document.querySelector("#btn-secundario");

//seleciona as três caixas
const caixas = document.querySelectorAll(
    ".primeira-div, .segunda-div, .terceira-div"
);

//coloca as bordas verdes
botaoPrincipal.addEventListener("click", function() {
    caixas.forEach(function(caixa) {
        caixa.style.border = "3px solid green";
    });
});

//remove as bordas
botaoSecundario.addEventListener("click", function() {
    caixas.forEach(function(caixa) {
        caixa.style.border = "none";
    });
});

//clique da borda roxa
caixas.forEach(function(caixa) {
    caixa.addEventListener("click", function() {
        caixa.style.border = "3px solid purple";
    });
});
