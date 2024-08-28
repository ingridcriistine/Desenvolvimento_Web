var editar = document.getElementById("form-editar")

function exibirAlerta() {

    var confirmacao = prompt("Digite 'TENHO CERTEZA' para confirmar.");

    if(confirmacao == "TENHO CERTEZA") {
        console.log('Excluir');
    }
}

function editarChamado() {
    editar.style.display = "block";
}

function esconder() {
    editar.style.display = "none";
}