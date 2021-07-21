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
    cliente.servico = document.getElementsByName("serv").value;
    cliente.descricao = document.getElementById("ped").value;

    if (cliente.nome == "") {
        window.alert("Preencha o campo nome!");
        cliente.nome.focus();
        return false;
    } else if (cliente.email == "") {
        window.alert("Preencha o campo email!");
        cliente.email.focus();
        return false;
    } else if (cliente.telefone == "") {
        window.alert("Preencha o campo telefone!");
        cliente.telefone.focus();
        return false;
    } else if (cliente.servico == "") {
        window.alert("Preencha o campo serviço!");
        cliente.servico.focus();
        return false;
    } else if (cliente.descricao == "") {
        window.alert("Preencha o campo descrição!");
        cliente.descricao.focus();
        return false;
    } else {

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
    }
}