function ContatoC() {
    var cliente = {
        nome: "",
        email: "",
        telefone: "",
        servico: "",
        descricao: ""
    }

    cliente.nome = document.getElementById("nome").value;
    cliente.email = document.getElementById("email").value;
    cliente.telefone = document.getElementById("telef").value;
    cliente.servico = document.getElementById("serv").value;
    cliente.descricao = document.getElementById("ped").value;

    var confirm = prompt("Confirme o dados abaixo por favor.\nNome: " + cliente.nome + "\nEmail: " + cliente.email + "\nTelefone: " + cliente.telefone + "\nCaso esteja tudo OK, digite Sim, caso contrario, Não.");

    if (confirm.toUpperCase() == "SIM") {
        alert("Obrigado pela mensagem " + cliente.nome + "!\nLogo entro em contato contigo!");
    }
    else if (confirm.toUpperCase() == "NÃO") {
        alert("Preencha de novo por favor.");
    }
    else {
        alert("Resposta invalida!");
    }

    location.reload()
    value.onunload()

}