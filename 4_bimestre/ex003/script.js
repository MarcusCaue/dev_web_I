function entrou() {
    var title = document.querySelector("h2#mensagemOferta");
    title.innerHTML = "Aqui você encontrará as melhores ofertas!"
    title.style.filter = "drop-shadow(0px 0px 9px)";
}

function saiu() {
    var title = document.querySelector("h2#mensagemOferta");
    title.innerHTML = ""
}


function acessar(link) {
    window.open(link);
}

function validaForm() {
    var dadoTelefone = document.querySelector("input#tel").value;

    if (dadoTelefone == '') {
        window.alert("Digite um dado! O campo não pode ficar vazio.")
        return false;
    } else {
        return true;
    }

    
}